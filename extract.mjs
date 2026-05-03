import fs from 'fs';

const files = [
  'src/data/translations.js',
  'src/data/translations2.js',
  'src/data/translations3.js',
  'src/data/translations4.js',
  'src/context/LangContext.jsx',
  'src/data/staticContent.js'
];

const texts = new Set();
const regex = /en:\s*("[^"\\\\]*(?:\\\\.[^"\\\\]*)*"|'[^'\\\\]*(?:\\\\.[^'\\\\]*)*')/g;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    let text;
    try { text = eval(`(${match[1]})`); } catch(e) { text = match[1].slice(1,-1); }
    texts.add(text);
  }
}

const arr = Array.from(texts);
fs.writeFileSync('all-english-texts.json', JSON.stringify(arr, null, 2));
console.log('Total texts:', arr.length);
