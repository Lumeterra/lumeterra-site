'use strict';
const downloadUrl = window.LUMETERRA_CONFIG?.downloadUrl;
if (downloadUrl) {
  document.querySelectorAll('[data-download]').forEach((link) => {
    link.href = downloadUrl;
  });
}
