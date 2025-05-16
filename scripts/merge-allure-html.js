const fs = require('fs');
const path = require('path');

const reportDir = path.join(__dirname, '..', 'allure-report');
const outputFile = path.join(__dirname, '..', 'allure-report.html');

function readFileAsBase64(filePath) {
  const ext = path.extname(filePath);
  const mimeTypes = {
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.eot': 'application/vnd.ms-fontobject',
  };
  const mimeType = mimeTypes[ext] || 'application/octet-stream';
  const data = fs.readFileSync(filePath);
  return `data:${mimeType};base64,${data.toString('base64')}`;
}

function inlineAssets(html) {
  return html.replace(/<(link|script|img) [^>]*(href|src)="([^"]+)"[^>]*>/g, (match, tag, attr, value) => {
    const assetPath = path.join(reportDir, value);
    if (!fs.existsSync(assetPath)) return match;

    const base64 = readFileAsBase64(assetPath);
    if (tag === 'link') {
      const css = fs.readFileSync(assetPath, 'utf-8');
      return `<style>${css}</style>`;
    }
    if (tag === 'script') {
      const js = fs.readFileSync(assetPath, 'utf-8');
      return `<script>${js}</script>`;
    }
    if (tag === 'img') {
      return match.replace(value, base64);
    }
    return match;
  });
}

const indexPath = path.join(reportDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('index.html not found in allure-report/');
  process.exit(1);
}

let html = fs.readFileSync(indexPath, 'utf-8');
html = inlineAssets(html);

fs.writeFileSync(outputFile, html);
console.log(`✅ Single-file Allure report created at: ${outputFile}`);
