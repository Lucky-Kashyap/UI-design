import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '..', 'src');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (entry.name.endsWith('.jsx')) {
      const dest = full.replace(/\.jsx$/, '.tsx');
      if (!fs.existsSync(dest)) fs.renameSync(full, dest);
    } else if (entry.name.endsWith('.js') && !entry.name.endsWith('.test.js')) {
      const dest = full.replace(/\.js$/, '.ts');
      if (!fs.existsSync(dest)) fs.renameSync(full, dest);
    }
  }
}

walk(srcDir);
console.log('Converted jsx/js -> tsx/ts');
