

import { BeforeAll, AfterAll, Before, After, AfterStep, setDefaultTimeout, World, Status } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, firefox, webkit, Page } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { getConfig } from '../../../utils/config'; 
import { ITestCaseHookParameter } from '@cucumber/cucumber';
import chalk from 'chalk';

// Page objects
import { HomePage } from '../../../pages/homepage';
import { LoginPage } from '../../../pages/loginpage';
// import { BillingPage } from '../../../pages/billingpagge';
// import { InvoicePage } from '../../../pages/invoicepage';
import { CommonPage } from '../../../pages/commonpage';
import { BasePage } from '../../../pages/basepage';
import{PlaywrightDriver} from '../../../utils/playwrightdriver';
import{CompanyManagementPage} from '../../../pages/companyManagementPage';
import{PoolManagementPage} from '../../../pages/poolManagementPage';
import{UnitManagementPage} from '../../../pages/unitManagementPage';
import{EDIPage} from '../../../pages/ediPage';
import{HaulageDataPage} from '../../../pages/haulageDataPage';
import{MovementsPage} from '../../../pages/movementsPage';
import{ApiMovementEventPage} from '../../../pages/apiMovementEventsPage';
import { BillingRunPage } from '../../../pages/billingRunPage';  
import {QuickTrackingPage}from '../../../pages/quickTrackingPage'  
import { ReferenceDataPage } from '../../../pages/referenceDataPage'; 


let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(60 * 1000);

// Extend World to include pages map
declare global {
  interface World {
    browser: Browser;
    context: BrowserContext;
    page: Page;
    pages: Map<string, any>; // Add this line for shared access to page objects
  }
}

BeforeAll(async function () {
  const { browser: browserName, headless } = getConfig();

  let browserType;
  switch (browserName) {
    case 'firefox':
      browserType = firefox;
      break;
    case 'webkit':
      browserType = webkit;
      break;
    default:
      browserType = chromium;
      break;
  }

  browser = await browserType.launch({ headless });
  console.log(`✅ Browser launched: ${browserName}, headless: ${headless}`);
});

Before(async function () {
  context = await browser.newContext();
  const page = await context.newPage();

  this.browser = browser;
  this.context = context;
  this.page = page;

  // Instantiate page objects
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  // const billingPage = new BillingPage(page);
  // const invoicePage = new InvoicePage(page);
  const commonPage = new CommonPage(page);
  const basePage = new BasePage(page);
  const playwrightDriver =new PlaywrightDriver(page);
  const companyManagementPage=new CompanyManagementPage(page);
  const poolManagementPage= new PoolManagementPage(page);
  const unitManagementPage= new UnitManagementPage(page);
  const ediPage=new EDIPage(page);
  const haulageDataPage = new HaulageDataPage(page);
  const movementsPage = new  MovementsPage(page);
  const apiMovementEventsPage=new ApiMovementEventPage(page);
  const billingRunPage =  new BillingRunPage(page);
  const quickTrackingPage = new QuickTrackingPage(page);
  const referenceDataPage = new ReferenceDataPage(page);


  // Store them in a map for use in step definitions
  this.pages = new Map<string, any>();
  this.pages.set("loginPage", loginPage);
  this.pages.set("homePage", homePage);
  // this.pages.set("billingPage", billingPage);
  // this.pages.set("invoicePage", invoicePage);
  this.pages.set("commonPage", commonPage);
  this.pages.set("basePage", basePage);
  this.pages.set("playwrightDriver",playwrightDriver);
  this.pages.set("companyManagementPage",companyManagementPage);
  this.pages.set("poolManagementPage",poolManagementPage);
  this.pages.set("unitManagementPage",unitManagementPage);
  this.pages.set("ediPage",ediPage);
  this.pages.set("haulageDataPage",haulageDataPage);
  this.pages.set("movementsPage",movementsPage);
  this.pages.set("apiMovementEventsPage",apiMovementEventsPage);
  this.pages.set("billingRunPage",billingRunPage);
  this.pages.set("quickTrackingPage",quickTrackingPage);
  this.pages.set("referenceDataPage",referenceDataPage);


  console.log('🧪 New test context/page created and all page objects initialized.');
});

// After(async function () {
//   await this.page.close();
//   await this.context.close();
//   console.log('♻️ Page and context closed after scenario.');
// });
// After(async function ( scenario: ITestCaseHookParameter) {
//   const status = scenario.result?.status;
//   const scenarioName = scenario.pickle.name;

//   // Log scenario name and status
//   const statusColor = status === Status.PASSED ? '✅' :
//                     status === Status.FAILED ? '❌' :
//                     status === Status.SKIPPED ? '⚠️' : 'ℹ️';
//   // console.log(`📘 Scenario: "${scenarioName}" - Status: ${status}`);
//   console.log(`${statusColor} Scenario: "${scenarioName}" - Status: ${status}`);

//   await this.page.close();
//   await this.context.close();
//   console.log('♻️ Page and context closed after scenario.');
// });
After(async function ( scenario: ITestCaseHookParameter) {
  const status = scenario.result?.status;
  const scenarioName = scenario.pickle.name;

  // Define color output based on status
  let coloredStatus: string;

  switch (status) {
    case Status.PASSED:
      coloredStatus = chalk.green(`✅ PASSED`);
      break;
    case Status.FAILED:
      coloredStatus = chalk.red(`❌ FAILED`);
      break;
    case Status.SKIPPED:
      coloredStatus = chalk.yellow(`⚠️ SKIPPED`);
      break;
    default:
      coloredStatus = chalk.white(`ℹ️ ${status}`);
  }

  console.log(`📘 Scenario: "${chalk.bold(scenarioName)}" - Status: ${coloredStatus}`);

  await this.page.close();
  await this.context.close();
  console.log('♻️ Page and context closed after scenario.');
});

AfterStep(async function ({ result, pickle }) {
  if (result.status === Status.FAILED) {
    console.log("FAILED")
    const dir = './screenshots';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const fileName = `${pickle.name.replace(/\s+/g, '_')}_${Date.now()}.png`;
    const screenshot = await this.page.screenshot({ path: path.join(dir, fileName) });
    this.attach(screenshot, 'image/png');
  }
  
});

AfterAll(async function () {
  await browser.close();
  console.log('🛑 Browser closed after all tests.');
});
