import fs from 'fs-extra';
import path from 'path';

const reportDir = 'allure-report';
const resultsDir = 'allure-results';

const historyFrom = path.join(reportDir, 'history');
const historyTo = path.join(resultsDir, 'history');

(async () => {
  if (fs.existsSync(historyFrom)) {
    await fs.ensureDir(historyTo);
    await fs.copy(historyFrom, historyTo);
    console.log('✅ Allure history copied successfully.');
  } else {
    console.log('⚠️ No previous history found in allure-report.');
  }
})();
