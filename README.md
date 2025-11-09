![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Password-Protected Text Tool

提供“密码保护文本”的 Editor.js 块级工具（BlockTool）。

- 编辑与阅读模式均默认上锁：显示“密码保护区域”
- 输入密码并点击“显示”解锁后，才展示并（在编辑模式）允许编辑内容
- 新建空白块时，第一次输入的密码将作为该块的加密密钥；点击“隐藏”会用该密钥加密并清除明文

## 编译

```shell
npx --yes vite build
```
## 安装

```shell
yarn add @editorjs/password
```


## 安装

```html
<script src="dist/password.umd.js"></script>
```

## 使用

```javascript
import Password from '@editorjs/password';

const editor = new EditorJS({
  tools: {
    // 工具 key 决定了输出中的 type，这里使用 'password'
    password: {
      class: Password,
      inlineToolbar: true,
      config: {
        // 可选配置（均为 i18n 文案）：
        contentPlaceholder: '请输入受保护内容',
        passwordPlaceholder: '输入密码',
        buttonText: '显示',
        lockedText: '密码保护区域',
        lockButtonText: '隐藏'
      }
    }
  }
});
```

## 配置参数

- contentPlaceholder: 受保护内容占位（string）
- passwordPlaceholder: 密码输入框占位（string）
- buttonText: 解锁按钮文案（string）
- lockedText: 上锁时展示的占位文案（string），默认“密码保护区域”
- lockButtonText: 解锁后用于“完成并隐藏”的按钮文案（string）

## 数据输出

保存时的数据结构如下（仅保存密文，不保存明文）：

```json
{
  "type": "password",
  "data": {
    "encrypted": {
      "v": 1,
      "algo": "PBKDF2-AES-GCM",
      "iter": 300000,
      "salt": "base64...",
      "iv": "base64...",
      "cipher": "base64..."
    }
  }
}
```

说明：点击“隐藏”或保存时，使用用户输入的密码派生密钥（PBKDF2，SHA-256，300000 次，含随机 salt）对内容进行 AES-GCM 加密，并绑定块 ID 作为 AAD（additional authenticated data）。再次打开时需输入正确密码解锁；若密码错误将无法解密。

---


