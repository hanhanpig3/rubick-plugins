'use strict';
let clipboard = null;
try {
  clipboard = require('electron').clipboard;
} catch (e) {
  clipboard = null;
}

window.rubick = window.rubick || {};
window.rubick.copyText = function (text) {
  if (!clipboard) return false;
  try { clipboard.writeText(text); return true; } catch (e) { return false; }
};
