import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync, readFileSync, writeFileSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const WORK_DIR = './assets/work';
const QUALITY = 80;

function walkDir(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      files.push(...walkDir(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

const images = walkDir(WORK_DIR).filter(f => /\.(png|jpg|jpeg)$/i.test(f));
const renames = new Map();
let totalOld = 0, totalNew = 0;

for (const imgPath of images) {
  const webpPath = imgPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const oldSize = statSync(imgPath).size;
  totalOld += oldSize;

  await sharp(imgPath).webp({ quality: QUALITY }).toFile(webpPath);

  const newSize = statSync(webpPath).size;
  totalNew += newSize;
  unlinkSync(imgPath);

  const relOld = imgPath.replace(/\\/g, '/').replace(/^\.\//, '');
  const relNew = webpPath.replace(/\\/g, '/').replace(/^\.\//, '');
  renames.set(relOld, relNew);

  console.log(`${basename(imgPath).padEnd(40)} ${(oldSize/1024).toFixed(0).padStart(6)}KB → ${(newSize/1024).toFixed(0).padStart(5)}KB`);
}

// Update data.js references
let dataJs = readFileSync('./data.js', 'utf8');
for (const [oldPath, newPath] of renames) {
  dataJs = dataJs.replaceAll(oldPath, newPath);
}
writeFileSync('./data.js', dataJs);

const savedMB = ((totalOld - totalNew) / 1024 / 1024).toFixed(0);
console.log(`\n✓ ${images.length} dosya dönüştürüldü`);
console.log(`  ${(totalOld/1024/1024).toFixed(0)} MB → ${(totalNew/1024/1024).toFixed(0)} MB (${savedMB} MB kazanıldı)`);
console.log('  data.js güncellendi');
