'use strict';
let clipboard = null;
let nativeImage = null;
try {
  clipboard = require('electron').clipboard;
  nativeImage = require('electron').nativeImage;
} catch (e) {
  clipboard = null;
  nativeImage = null;
}

window.rubick = window.rubick || {};
window.rubick.copyText = function (text) {
  if (!clipboard) return false;
  try { clipboard.writeText(text); return true; } catch (e) { return false; }
};
window.rubick.copyImage = function (dataUrl) {
  if (!clipboard || !nativeImage) return false;
  try {
    // strip data URL prefix
    var base64 = dataUrl.replace(/^data:image\/\w+;base64,/, '');
    var img = nativeImage.createFromBuffer(Buffer.from(base64, 'base64'));
    clipboard.writeImage(img);
    return true;
  } catch (e) {
    return false;
  }
};
