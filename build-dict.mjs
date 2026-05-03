import fs from "fs";
import { translate } from "@vitalets/google-translate-api";

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function translateBatch(texts) {
  // Join texts with a unique separator that Google Translate won't mess up
  const separator = " 🔴 ";
  const joinedText = texts.join(separator);
  try {
    const res = await translate(joinedText, { from: "en", to: "ar" });
    const translatedStr = res.text;
    // Split by separator
    let splitted = translatedStr.split(/\s*🔴\s*/);
    
    // Sometimes Google Translate removes spaces around emojis or might change them. 
    // If length mismatches, we fallback to one-by-one.
    if (splitted.length === texts.length) {
      return splitted;
    } else {
      console.log("Length mismatch, falling back to one-by-one for this batch.");
    }
  } catch (err) {
    console.error("Batch translate error:", err.message);
  }
  
  // Fallback: translate one by one
  const results = [];
  for (const text of texts) {
    try {
      const res = await translate(text, { from: "en", to: "ar" });
      results.push(res.text);
      await delay(500);
    } catch(e) {
      console.log("Error on", text);
      results.push(text);
    }
  }
  return results;
}

async function run() {
  const content = fs.readFileSync('all-english-texts.json', 'utf-8');
  const texts = JSON.parse(content);
  
  const dict = {};
  
  // Batch size 15
  const batchSize = 15;
  for (let i = 0; i < texts.length; i += batchSize) {
    const batch = texts.slice(i, i + batchSize);
    console.log(`Translating batch ${i} to ${i+batch.length} of ${texts.length}`);
    const translatedBatch = await translateBatch(batch);
    for (let j = 0; j < batch.length; j++) {
      dict[batch[j]] = translatedBatch[j];
    }
    await delay(1000); // 1 sec delay between batches
  }
  
  fs.writeFileSync('ar-dict.json', JSON.stringify(dict, null, 2));
  console.log("Done translating!");
}

run().catch(console.error);
