const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = path.resolve(__dirname, '../generate_insta_vibe_post.html');
const localPng = path.resolve(__dirname, '../testacademy_insta_fb_post.png');
const desktopPng = 'C:\\Users\\Daniel\\Desktop\\testacademy_insta_fb_post.png';
const downloadsPng = 'C:\\Users\\Daniel\\Downloads\\testacademy_insta_fb_post.png';

const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

// Render using Chrome Headless with exact 1080x1080 canvas
const cmd = `cmd /c ""${chrome}" --headless=new --user-data-dir="%TEMP%\\chrome_render_post" --window-size=1080,1080 --virtual-time-budget=5000 --screenshot="${localPng}" "${fileUrl}""`;

console.log('Rendering high-res 1080x1080 social post image...');
try {
  execSync(cmd);
  if (fs.existsSync(localPng)) {
    fs.copyFileSync(localPng, desktopPng);
    fs.copyFileSync(localPng, downloadsPng);
    console.log('✅ SIKERES RENDERELÉS!');
    console.log('📁 Mentve ide:');
    console.log('   - Asztal: ' + desktopPng);
    console.log('   - Letöltések: ' + downloadsPng);
    console.log('   - Projekt: ' + localPng);
  } else {
    console.error('❌ Hiba: A fájl nem jött létre.');
  }
} catch (e) {
  console.error('❌ Renderelési hiba:', e.message);
}
