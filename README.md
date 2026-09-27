# Rubick 插件集合

备忘快贴项目插件矩阵，共 8 个插件。

## 插件列表

| 插件 | 版本 | 说明 | 触发词 |
|------|------|------|--------|
| [rubick-memo](./rubick-memo) | 0.2.1 | 备忘快贴：快速记录、剪贴板备忘 | 备忘 / 快贴 / memo |
| [rubick-tencent-ocr](./rubick-tencent-ocr) | 0.2.0 | 腾讯OCR：16种OCR类型识别 | 腾讯ocr / 表格识别 |
| [rubick-tinker-qrcode](./rubick-tinker-qrcode) | 0.1.0 | 二维码生成与扫描 | 二维码 / qrcode / 扫码 |
| [rubick-dev-coder](./rubick-dev-coder) | 0.1.0 | 编码转换：Base64/URL/Hex/Unicode + 时间戳 + Hash | 编码 / base64 / hash |
| [rubick-dev-formatter](./rubick-dev-formatter) | 0.1.0 | 格式化：JSON/SQL/XML/CSS + 文本对比 | 格式化 / json / diff |
| [rubick-dev-regexp](./rubick-dev-regexp) | 0.1.0 | 正则表达式：实时匹配 + 捕获组 + 替换预览 | 正则 / regexp |
| [rubick-dev-color](./rubick-dev-color) | 0.1.0 | 颜色工具箱：取色/格式转换/配色/渐变 | 颜色 / color / 取色 |
| [rubick-dev-codeimage](./rubick-dev-codeimage) | 0.1.0 | 代码截图：语法高亮 + 多主题 + PNG导出 | 代码截图 / code image |

## 发布到 npm

### 单个插件发布

```bash
cd rubick-dev-coder && npm publish --access public
```

### 全部发布

```bash
npm run publish:all
```

## 安装到 Rubick

1. 在备忘快贴项目根目录运行 `install-all.ps1` 生成 `custom-plugins.json`
2. 在 Rubick 中导入 `custom-plugins.json`
3. 在 Rubick 插件市场下载各插件

## 目录结构

```
rubick-plugins/
├── package.json          # 根配置（npm workspaces）
├── README.md
├── rubick-memo/
├── rubick-tencent-ocr/
├── rubick-tinker-qrcode/
├── rubick-dev-coder/
├── rubick-dev-formatter/
├── rubick-dev-regexp/
├── rubick-dev-color/
└── rubick-dev-codeimage/
```

## License

MIT
