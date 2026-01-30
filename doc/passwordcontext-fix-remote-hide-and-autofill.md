## 背景

本次工作针对 `PlugIns/editorjs-passwordcontext`（Editor.js 密码保护块工具）处理了两个问题：

- **问题 1（远端访问点击“隐藏”无反应）**：在非本地（非 `localhost`）访问时，新建密码内容后点击“隐藏”，UI 无变化，看起来像按钮失效；而在 `localhost` 下正常。
- **问题 2（密码框触发浏览器保存/收集密码）**：在密码输入框输入内容时，容易触发浏览器/密码管理器的“保存密码/自动填充”提示。


## 问题 1：远端点击“隐藏”无反应

### 根因

“隐藏”动作会调用 `crypto.subtle`（Web Crypto API）做加密（PBKDF2 + AES-GCM）。

Web Crypto 的 `crypto.subtle` 在很多浏览器中 **只在安全上下文**可用：

- `https://...`
- `http://localhost` / `http://127.0.0.1`

当远端以 `http://域名/IP` 访问时，`crypto.subtle` 往往不可用，导致加密过程抛错并中断，最终表现为 **点击“隐藏”没有任何反应**（异步流程被异常打断，未走到 UI 切回锁定状态的代码）。


### 解决方案

在 `src/index.ts` 中实现了 **加密/解密的降级路径**：

- **优先使用 WebCrypto（AES-GCM + AAD）**：安全性更强
- **当 WebCrypto 不可用时降级到 CryptoJS（AES-CBC）**：保证在 `http://非localhost` 的远端也能隐藏/解锁

同时对“隐藏”按钮点击加上了 `try/catch`，避免异常时“无感失败”。


### 关键改动点（概述）

- `EncryptedPayload.algo` 扩展为：
  - `PBKDF2-AES-GCM`（WebCrypto）
  - `PBKDF2-AES-CBC`（CryptoJS fallback）
- 新增/调整：
  - `hasWebCrypto()`：判断 `crypto.subtle` 是否可用
  - `getAadString()`：生成 AAD 字符串（绑定 block id）
  - `encryptWithPassword()` / `decryptWithPassword()`：按 algo 以及环境选择 GCM/CBC 方案
- 新增依赖：
  - `crypto-js`
  - `@types/crypto-js`


### 构建与同步

仓库内提供了脚本 `build_dist_copy.bat`，用于构建并复制产物到 QNotes 静态目录：

- 源产物：`PlugIns/editorjs-passwordcontext/dist/*`
- 目标目录：`QNotes/public/vendor/editorjs-password/*`

本次实际使用了：

- `PlugIns/editorjs-passwordcontext/build_dist_copy.bat`

注意：脚本末尾有 `pause`，运行后会等待按键（不影响复制结果）。


## 问题 2：密码输入框触发“保存密码/自动填充”

### 目标

减少浏览器/密码管理器将该输入框识别为“登录密码”并触发保存/自动填充提示的概率。

说明：不同浏览器/插件策略不同，**无法保证 100% 禁止**，但可以显著降低触发率。


### 解决方案

在渲染锁定控件的密码输入框上增加了“反自动填充/反密码管理器”配置：

- **标准属性**：
  - `autocomplete="new-password"`
  - `autocapitalize="off"`
  - `autocorrect="off"`
  - `spellcheck=false`
- **避免敏感字段命名**：
  - `name="qnotes-editorjs-passcode"`
  - `id="qnotes-editorjs-passcode-<blockId>"`
- **密码管理器忽略标记（常见几家）**：
  - `data-1p-ignore="true"`（1Password）
  - `data-lpignore="true"`（LastPass）
  - `data-bwignore="true"`（Bitwarden）
  - `data-keeper-ignore="true"`（Keeper）
  - `data-form-type="other"`（一些引擎参考此类标记）
- **小技巧（降低自动填充触发概率）**：
  - 输入框初始 `readOnly=true`
  - 第一次 `focus` 后再设置 `readOnly=false`


## 受影响文件

- `PlugIns/editorjs-passwordcontext/src/index.ts`
  - 远端加密降级（WebCrypto → CryptoJS）
  - “隐藏”按钮异常处理
  - 密码输入框防自动填充/防密码管理器提示
- `PlugIns/editorjs-passwordcontext/package.json`
  - 新增依赖 `crypto-js` / `@types/crypto-js`
- `QNotes/public/vendor/editorjs-password/password.umd.js`
  - 通过 `build_dist_copy.bat` 从 `dist` 同步更新（运行时实际加载的产物）


## 验证建议（手工）

- **远端 http 环境**（非 localhost）：
  - 新建密码块 → 输入密码 → 编辑内容 → 点击“隐藏”
  - 预期：能成功切回锁定状态；再次输入同密码可解锁
- **本地 localhost/https 环境**：
  - 同上流程应保持正常
- **密码自动填充提示**：
  - 在 Chrome/Edge 中多次输入密码，观察是否仍弹“保存密码”
  - 若仍频繁弹出，请记录具体浏览器 + 密码管理器插件名称/版本，再针对性补充其支持的 ignore 标记

