const { clipboard } = require('electron');

window.copyText = function (text) {
  clipboard.writeText(String(text == null ? '' : text));
};
