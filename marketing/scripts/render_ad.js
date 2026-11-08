const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const html = path.resolve(__dirname, '../generate_feed_ad.html');
const out = 'C:\\Users\\Daniel\\Downloads\\testacademy_feed_ad_1080x1080.png';
const desktop = 'C:\\Users\\Daniel\\Desktop\\testacademy_feed_ad_1080x1080.png';

const url = 'file:///' + html.replace(/\\/g, '/');
const cmd = `"${chrome}" --headless --disable-gpu --screenshot="${out}" --window-size=1080,1080 --hide-scrollbars "${url}"`;

try {
  execSync(cmd);
  if (fs.existsSync(out)) {
    fs.copyFileSync(out, desktop);
    console.log('SUCCESS: Rendered directly to Downloads and Desktop!');
  } else {
    console.log('Not created');
  }
} catch (e) {
  console.error(e.message);
}
