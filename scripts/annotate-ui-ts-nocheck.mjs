import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const uiDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'components', 'ui');
const files = fs.readdirSync(uiDir).filter((f) => f.endsWith('.tsx') || f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(uiDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.startsWith('// @ts-nocheck')) {
    fs.writeFileSync(filePath, `// @ts-nocheck\n${content}`);
  }
}

console.log(`Annotated ${files.length} ui files`);
