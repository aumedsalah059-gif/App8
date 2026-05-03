import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { translate } from '@vitalets/google-translate-api';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const csvData = fs.readFileSync(path.join(__dirname, "data/products.csv"), "utf-8");
  const records = parse(csvData, { columns: true, skip_empty_lines: true });

  console.log(`Translating ${records.length} items to Kurdish (Sorani/Kurmanji)...`);
  
  let results = {};
  
  const chunkArray = (arr, size) => {
    let res = [];
    for(let i=0; i<arr.length; i+=size) {
      res.push(arr.slice(i, i+size));
    }
    return res;
  };

  const chunks = chunkArray(records, 5);

  let i = 0;
  for(const chunk of chunks) {
    console.log(`Translating chunk ${++i}/${chunks.length}...`);
    try {
      // Create a large text payload
      let payload = chunk.map(r => 
        `${r.product_name} ||| ${r.brand} ||| ${r.category} ||| ${r.concerning_ingredients} ||| ${r.safe_ingredients} ||| ${r.summary} ||| ${r.recommendation} ||| ${r.safer_alternative}`
      ).join(" \n---\n ");

      const res = await translate(payload, { to: 'ckb' }); // Sorani
      
      const translatedBlocks = res.text.split("\n---\n");
      
      for(let j=0; j<chunk.length; j++) {
        const item = chunk[j];
        if (translatedBlocks[j]) {
          const parts = translatedBlocks[j].split(" ||| ").map(s => s.trim());
          results[item.product_name] = {
            id: item.product_name,
            product_name_ku: parts[0] || item.product_name,
            brand_ku: parts[1] || item.brand,
            category_ku: parts[2] || item.category,
            concerning_ku: parts[3] ? parts[3].split(';') : [],
            safe_ku: parts[4] ? parts[4].split(';') : [],
            summary_ku: parts[5] || item.summary,
            rec_ku: parts[6] || item.recommendation,
            alt_ku: parts[7] || item.safer_alternative,
          };
        } else {
          results[item.product_name] = { id: item.product_name };
        }
      }
    } catch(e) {
      console.error("Failed on chunk", i, e);
    }
    // Add small delay to prevent rate limit
    await new Promise(r => setTimeout(r, 1500));
  }

  // Fallback to manually generate the ones that failed or everything just in case
  fs.writeFileSync(path.join(__dirname, "data/products_ku.json"), JSON.stringify(results, null, 2));
  console.log("Done!");
}

run();
