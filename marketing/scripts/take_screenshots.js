const { execSync } = require('child_process');
const fs = require('fs');

if (!fs.existsSync('screenshots')) {
  fs.mkdirSync('screenshots', { recursive: true });
}

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

try {
  // Desktop 1280x1400
  const cmdDesktop = `"${chrome}" --headless --disable-gpu --screenshot="screenshots/desktop_view.png" --window-size=1280,1400 --hide-scrollbars "https://testacademy.hu/#join"`;
  execSync(cmdDesktop);
  console.log('Desktop screenshot saved');

  // Mobile 375x1200
  const cmdMobile = `"${chrome}" --headless --disable-gpu --screenshot="screenshots/mobile_view.png" --window-size=375,1400 --hide-scrollbars "https://testacademy.hu/#join"`;
  execSync(cmdMobile);
  console.log('Mobile screenshot saved');
} catch (e) {
  console.error(e.message);
}
