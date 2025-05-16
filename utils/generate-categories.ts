import fs from 'fs-extra';
import path from 'path';

const categoriesPath = path.join('allure-results', 'categories.json');

const categories = [
  {
    name: "AssertionError",
    matchedStatuses: ["failed"],
    messageRegex: ".*AssertionError.*"
  },
  {
    name: "Timeout",
    matchedStatuses: ["broken"],
    messageRegex: ".*Timeout.*"
  },
  {
    name: "Known Bug",
    matchedStatuses: ["failed"],
    messageRegex: ".*BUG-.*"
  },
  {
    name: "Unknown Failure",
    matchedStatuses: ["failed"]
  }
];

(async () => {
  try {
    await fs.ensureDir('allure-results');
    await fs.writeJson(categoriesPath, categories, { spaces: 2 });
    console.log("✅ categories.json generated successfully.");
  } catch (err) {
    console.error("❌ Failed to generate categories.json:", err);
  }
})();
