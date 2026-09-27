# 备忘快贴 (rubick-memo)

一个 rubick 备忘录插件：快速记录文字备忘，随时一键复制到剪贴板。

## 功能

- **打开备忘快贴**：输入 `备忘` / `备忘录` / `memo` 打开列表，可查看、添加、复制、删除、搜索、清空
- **快速添加**：直接输入内容，选中「添加备忘」即可保存（无需先打开插件）
- **一键粘贴**：输入 `粘贴备忘` / `复制备忘`，把最新一条备忘复制到剪贴板并自动收起窗口
- **快捷键**：
  - `Ctrl+N`：新建备忘（进入编辑框，内容为空）
  - `Ctrl+S`：保存当前正在编辑的备忘（编辑框内也可用 `Ctrl+Enter` 保存）
  - `Esc`：退出正在编辑的备忘（放弃修改）／从详情返回列表
- **放大查看 & 段落复制**：点击列表中的某一条备忘进入放大详情，每条备忘按换行自动拆成若干"段"，点任意一段即可把那一整段（没有手动回车的那一段）复制到剪贴板并收起窗口，方便单独粘贴；也可一键"复制整条"

数据保存在 rubick 本地数据库中（rubick.dbStorage），无需联网。

## 目录结构

```
rubick-memo/
├── package.json   # 插件清单（name/pluginName/features/...）
├── plugin.json    # 与 package.json 相同声明（rubick 本地读取用）
├── index.html     # 插件主界面（列表 / 详情 / 编辑 三视图）
├── preload.js     # 预加载脚本（提供 window.copyText）
├── logo.png       # 插件图标
└── README.md
```

## 安装（推荐，一键脚本）

`install.ps1` 会自动完成：

1. 把 `rubick-memo` 文件夹拷贝到
   `%APPDATA%\rubick\rubick-plugins-new\node_modules\rubick-memo`
2. 把它注册到 `%APPDATA%\rubick\rubick-plugins-new\rubick-local-plugin.json`
   （保留你已安装的全部插件，只新增一条）
3. **自动将 logo 路径解析为绝对 `file://` 路径**（修复搜索栏 logo 不显示问题）
4. **自动同步 `rubick-plugins-new/package.json` 的 dependencies**（修复安装官方插件后手动插件被清除的问题）

运行方式：在 `install.ps1` 上右键 → "使用 PowerShell 运行"，或：

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1
```

完成后**完全退出并重新打开 rubick**，输入 `备忘` 即可使用。

> 已安装过旧版时，重跑 install.ps1 会**覆盖更新**到新版，原有备忘数据不受影响。

## 更新日志

### v0.2.1 (2026-08-25)
- **fix**: install.ps1 自动将 logo 相对路径解析为绝对 `file://` 路径，修复 rubick 搜索栏/选项列表中 logo 不显示的问题
- **fix**: install.ps1 自动同步 `rubick-plugins-new/package.json` 的 dependencies，修复从官方市场安装其他插件后本插件被 npm 清除的问题
- **chore**: 两个插件拆分为独立项目目录，各自拥有独立 git 仓库

### v0.2.0
- 三视图（列表 / 详情 / 编辑）、快捷键、段落级复制

## 说明

- 若希望搜索列表里显示图标，可把 `package.json` 里的 `logo` 换成任意在线图片 URL
  （rubick 对本地 logo 的显示支持有限，仅影响图标显示，不影响功能）。
- 卸载：删除 `rubick-memo` 文件夹，并从 `rubick-local-plugin.json` 移除对应条目即可。
