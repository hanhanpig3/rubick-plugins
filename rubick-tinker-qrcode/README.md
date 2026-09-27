# 二维码 (rubick-tinker-qrcode)

一个 [rubick](https://github.com/rubickCenter/rubick) 二维码生成与扫描插件，移植自 [tinker-qrcode](https://github.com/liriliri/tinker/tree/master/plugins/tinker-qrcode)。

## 功能

### 📱 二维码生成

- 输入任意文本、网址、JSON 等内容，自动生成二维码
- 实时预览：输入内容后自动刷新二维码
- 尺寸可调（100-600px）
- 前景/背景颜色自定义
- 4 级纠错：L / M / Q / H
- 一键下载为 PNG 图片
- 一键复制到剪贴板（图片格式）

### 📷 二维码扫描

- 拖入图片扫码
- 粘贴图片扫码（Ctrl+V）
- 文件选择扫码
- Rubick 关键词触发：`扫码` / `二维码扫描`

### 🎨 Rubick 集成

- 关键词触发：`二维码` / `二维码生成` / `qrcode`
- 支持 `text` 类型：输入文本直接生成二维码
- 支持 `img` 类型：图片直接扫码
- 支持 `files` 类型：文件直接扫码

## 安装

### 方式 1：一键脚本（推荐）

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1
```

### 方式 2：通过 Rubick 自定义插件导入

1. 准备 JSON 配置文件（见 `custom-plugins.json`）
2. 在 Rubick 中打开「市场」→「自定义插件」→「导入」
3. 上传 JSON 文件
4. 点击插件的「下载」按钮

### 方式 3：NPM 安装

```bash
npm install -g rubick-tinker-qrcode
```

## 依赖

- `qrcode-generator` (CDN: jsdelivr) - QR 码生成
- `jsQR` (CDN: jsdelivr) - QR 码扫描

## 更新日志

### v0.1.0 (2026-09-19)
- 初始版本：二维码生成 + 扫描
- 移植自 tinker-qrcode，转为 Rubick 插件格式

## 说明

- 二维码生成和扫描库通过 CDN 加载（jsdelivr），需要网络连接
- 支持深/浅主题自适应
- 卸载：删除插件文件夹，并从 `rubick-local-plugin.json` 移除对应条目
