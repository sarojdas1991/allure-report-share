import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, Page, chromium, expect } from '@playwright/test';
// import { BillingPage } from '../../pages/billingpagge';
import { LoginPage } from '../../pages/loginpage';
// import {InvoicePage} from '../../pages/invoicepage'
import {HomePage} from '../../pages/homepage'
import { CommonPage } from '../../pages/commonpage';
import { BasePage } from '../../pages/basepage';
import{PlaywrightDriver} from '../../utils/playwrightdriver';
import { ExcelUtil } from '../../utils/ExcelUtils';

// const excelUtil=new ExcelUtil('./downloads/CompanyManagement.xlsx');
let loginPage: LoginPage;
let commonPage: CommonPage;
let playwrightDriver:PlaywrightDriver;


Given('I am logged into the CMS application using {string} username and {string} password', { timeout: 20000 },async function (username: string, password: string) {
  
  loginPage = new LoginPage(this.page); 
  await loginPage.login(username, password);
  await loginPage.validateLoginSuccess();
});

Then('I log out from the CMS application',{ timeout: 20000 }, async function () {
  commonPage = new CommonPage(this.page);
  await commonPage.performLogout();
  // await browser.close();
});
Then('I wait for page to load', { timeout: 30000 }, async function () {
    playwrightDriver = new PlaywrightDriver(this.page);
    await playwrightDriver.waitForPageLoad();
  });
  Then('I remove the applied filter in screen',{ timeout: 20000 }, async function () {
    commonPage = new CommonPage(this.page);
    await commonPage.removeAppliedFilter();
    // await browser.close();
  });
