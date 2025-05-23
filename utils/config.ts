// utils/config.ts
import fs from 'fs';
import path from 'path';

interface Config {
  browser: 'chromium' | 'firefox' | 'webkit';
  headless: boolean;
  parallel: number;
}

export function getConfig(): Config {
  const configPath = path.resolve(__dirname, '../config.json');
  let config: Config = { browser: 'chromium', headless: true, parallel: 1 };
  // Check if config.json exists

  if (fs.existsSync(configPath)) {
    const fileConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    config = { ...config, ...fileConfig };
  }

  // Override with environment variables
  if (process.env.BROWSER) {
    config.browser = process.env.BROWSER.toLowerCase() as Config['browser'];
  }
  if (process.env.HEADLESS) {
    config.headless = process.env.HEADLESS === 'true';
  }
  if (process.env.PARALLEL) {
    const parsed = parseInt(process.env.PARALLEL, 10);
    if (!isNaN(parsed)) {
      config.parallel = parsed;
    }
  }

  return config;
}
