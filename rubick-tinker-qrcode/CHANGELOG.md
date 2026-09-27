# Changelog

## [0.1.0] - 2026-09-19

### 新增
- 初始版本：二维码生成 + 扫描
- 移植自 tinker-qrcode，转为 Rubick 插件格式
- 支持二维码生成（文本→PNG）
- 支持二维码扫描（拖入/粘贴/文件选择）
- 支持尺寸/颜色/纠错级别自定义
- 支持下载/复制到剪贴板
- Rubick 关键词触发：二维码/扫码/qrcode
- package.json 增加 NPM 发布元数据

### 技术
- 使用 qrcode-generator (CDN) 生成二维码
- 使用 jsQR (CDN) 扫描二维码
- preload.js 处理剪贴板操作
- 支持深/浅主题自适应
