// ============================================================
//  腾讯云 OCR 配置 —— 只需修改这一个文件的 3 个参数即可使用
//
//  [必填] 1. SecretId    腾讯云 API 密钥（形如 AKIDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx）
//           腾讯云控制台 → 访问管理 → API 密钥管理 → 新建密钥
//  [必填] 2. SecretKey   对应 SecretId 的密钥字符串
//  [必填] 3. Region      接口地域：ap-guangzhou(广州) / ap-beijing(北京) / ap-shanghai(上海)
//  [选填] type          识别类型：print(高精度文字识别-印刷体) / handwrite(通用手写体)，默认 print
//
//  说明：填入后重新运行顶层 install.ps1 即可；也可以在插件内「设置」中再修改。
// ============================================================
window.TC_OCR_CONFIG = {
  secretId: '',
  secretKey: '',
  region: 'ap-guangzhou',
  type: 'print'          // print | handwrite
};