## 密码保护 BlockTool 改造总结

本项目基于 Editor.js 实现“密码保护文本”块级工具（BlockTool），支持前端 PBKDF2 + AES-GCM 加解密，仅保存密文、不保存明文。

### 变更概览
- 工具逻辑：`src/index.ts`（默认导出 `PasswordBlock`）
- 样式：`src/index.css`（锁定态底纹与徽标）
- 构建产物：`vite.config.js`（库名 `Password`、文件前缀 `password`）
- 包元数据：`package.json`（名称改为 `@editorjs/password`）
- 文档：`README.md`（安装/使用/输出/安全说明）

### 主要能力与 API
- 解锁控件：密码输入 + “显示”按钮
- 编辑态“隐藏”按钮：加密保存并清除明文
- i18n 配置：`contentPlaceholder`、`passwordPlaceholder`、`buttonText`、`lockedText`、`lockButtonText`
- 工具箱标题：`toolbox.title = 'Password'`

### 数据结构与保存
- 保存方法：`save(wrapper): Promise<PasswordData>`
- 输出数据结构：

```json
{
  "type": "password",
  "data": {
    "encrypted": { "v": 1, "algo": "PBKDF2-AES-GCM", "iter": 100000, "salt": "...", "iv": "...", "cipher": "..." }
  }
}
```

- 净化规则：仅允许 `<br>`（`sanitize` 针对每个字段开启 `br: true`）
- 保存策略：
  - `static get contentless() { return true }` 允许空块也可被保存
  - `validate(data)` 始终返回 `true`，不会在保存阶段被过滤
  - 如需“至少一个字段非空才保存”，可将 `validate` 改为：任一字段非空时返回 `true`

### 样式说明（`src/index.css`）
- `.cdx-password` 容器与 `.cdx-password--locked` 锁定态切换
- 锁定态底纹、右上角徽标与中心淡化锁图标

### 修复与兼容性
- 运行时兼容 Editor.js v2.x（dev 依赖 `@editorjs/editorjs@^2.30.7`）

### 构建与产物
- 命令：

```bash
# 推荐：使用 npm（如果本机未安装 Yarn）
npm install --no-audit --no-fund
npx vite build

# 或使用 Yarn
yarn install --frozen-lockfile --non-interactive
yarn build
```

- 产物（`dist/`）：
  - `password.mjs`（ESM，用于打包器）
  - `password.umd.js`（UMD，用于浏览器 `<script>` 直接引入）
  - `index.d.ts`（类型声明）

### 使用示例

```js
import Password from '@editorjs/password';

const editor = new EditorJS({
  tools: {
    password: {
      class: Password,
      inlineToolbar: true,
      config: { /* ... */ }
    }
  }
});
```

浏览器直接引入 UMD：

```html
<script src="/dist/password.umd.js"></script>
```

### 已知注意事项与建议
- 字段值保存为 `innerHTML`（允许 `<br>`）。若需严格格式，请在保存后做数据清洗与校验。
- 可选增强：
  - 编辑态校验（仅允许数字/小数点的输入、格式化单价/数量等）
  - `validate` 政策调整（全空不保存）
  - 只读态样式区分、更完善的可访问性属性（`role`/`aria-*`）

### 版本信息
- 包名：`@editorjs/password`
- 版本：`0.1.0`
- 许可证：MIT

### 迁移要点
- 替换逻辑与 UI 为密码保护文本
- 更新导出名称与构建产物前缀（`quote` → `password`）
- 默认导出：`PasswordBlock`
