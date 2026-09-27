'use strict';
const fs = require('fs');
let clipboard = null;
try {
  clipboard = require('electron').clipboard;
} catch (e) {
  clipboard = null;
}

window.qrcode = {
  copyImage: function (dataURL) {
    if (!clipboard) return false;
    try {
      clipboard.writeText(dataURL);
      return true;
    } catch (e) {
      return false;
    }
  },
  copyText: function (text) {
    if (!clipboard) return false;
    try { clipboard.writeText(text); return true; } catch (e) { return false; }
  },
  readImageFile: function (filePath) {
    return fs.readFileSync(filePath).toString('base64');
  },
};
