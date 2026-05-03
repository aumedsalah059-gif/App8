import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function translateFile(filePath) {
  console.log('Translating', filePath);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  const prompt = `You are an expert translator. Rewrite the following JavaScript file. 
For every translation object in the code that contains an \`en\` and \`ku\` key, add an \`ar\` key with the Arabic translation of the English text.
Do not change anything else. Only output the raw javascript code, nothing else, without markdown fences like \`\`\`javascript.

Code:
${content}`;

  const res = await ai.models.generateContent({
    model: 'gemini-3.1-8b-prompting',
    contents: prompt,
  });
  
  let newCode = res.text.trim();
  if (newCode.startsWith('```javascript')) newCode = newCode.slice(13);
  if (newCode.startsWith('```js')) newCode = newCode.slice(5);
  if (newCode.startsWith('```')) newCode = newCode.slice(3);
  if (newCode.endsWith('```')) newCode = newCode.slice(0, -3);
  newCode = newCode.trim();
  
  fs.writeFileSync(filePath, newCode);
  console.log('Done with', filePath);
}

async function run() {
  await translateFile('src/data/translations.js');
  await translateFile('src/data/translations2.js');
  await translateFile('src/data/translations3.js');
  await translateFile('src/data/translations4.js');
  await translateFile('src/context/LangContext.jsx');
  await translateFile('src/data/staticContent.js');
  console.log('ALL DONE');
}

run().catch(console.error);
