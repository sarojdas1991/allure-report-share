import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, Page, chromium, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';
import {HomePage} from '../../pages/homepage'
import { CommonPage } from '../../pages/commonpage';
import { BasePage } from '../../pages/basepage';
import{PlaywrightDriver} from '../../utils/playwrightdriver';
import { ExcelUtil } from '../../utils/ExcelUtils';
import {ExcelFileConfig} from '../../utils/excelFileConfig';


let loginPage: LoginPage;
let homePage: HomePage;
let basePage:BasePage;
let commonPage:CommonPage;
let playwrightDriver:PlaywrightDriver;
let excelUtil: ExcelUtil;


Then('I Verify search link is available',{ timeout: 20000 }, async function () {
  commonPage=new CommonPage(this.page);
    await commonPage.verifySearchLink();

});

When('I navigate to search page',{ timeout: 20000 }, async function () {
  commonPage=new CommonPage(this.page);
    await commonPage.clickSearchLink();
});

Then('I Verify {string} page is available',{ timeout: 20000 }, async function (searchPageName:string) {
  commonPage=new CommonPage(this.page);
    await commonPage.verifySearchPage(searchPageName);
 });


When('I click the {string} on the {string} Page', { timeout: 20000 }, async function (elementName: string, pageName: string) {
  commonPage=new CommonPage(this.page);
  playwrightDriver = new PlaywrightDriver(this.page);
  const pageInstance = this.pages.get(pageName);
  if (!pageInstance) {
    throw new Error(`No page object found for key: ${pageName}`);
  }
  const element= await commonPage.toCamelCase(elementName);  
  console.log(element);
  // await playwrightDriver.clickElement(pageInstance[elementName.toLowerCase()]);
  await playwrightDriver.clickElement(pageInstance[element]);

});

Then('I verify that the {string} page is displayed under {string}',{ timeout: 60000 }, async function (elementName:string,pageName:string) {

  
  const pageInstance = this.pages.get(pageName);
  if (!pageInstance) {
    throw new Error(`No page object found for key: ${pageName}`);
  }
  const comPage = this.pages.get(pageName);

    // await comPage.verifyCompaniesPageTitle(pageInstance[elementName.toLowerCase()],elementName);

    commonPage=new CommonPage(this.page);
    const element= await commonPage.toCamelCase(elementName);  
    console.log(element);
    // await commonPage.verifyCompaniesPageTitle(pageInstance[elementName.toLowerCase()],elementName);
    await commonPage.verifyCompaniesPageTitle(pageInstance[element],elementName);
    
 });


Then('I select {string} page for entering value', { timeout: 30000 }, async function (pageName:string) {
// I select "Users" page for entering value
  const rowData2=excelUtil.getRandomRowAsMap(pageName);
  this.rowData = rowData2;
  console.log(this.rowData);
  
});
Then('I select {string} field for entering value in {string} under {string}', { timeout: 20000 }, async function (columnName:string,page:string,pageName:string) {
//  I select "company" field for entering value in "SearchUser" under "companyManagementPage"
  const pageInstance = this.pages.get(pageName);
  if (!pageInstance) {
    throw new Error(`No page object found for key: ${pageName}`);
  }
  const eleName=page+columnName;
  commonPage=new CommonPage(this.page);
  const element= await commonPage.toCamelCase(eleName);
  // const elementName = eleName.replace(/[-\s.]/g, '')
  console.log(element);
  console.log(columnName);
  console.log(pageInstance[element]);

  commonPage=new CommonPage(this.page);
  await commonPage.enterDataToTextFromMap(this.rowData,columnName,pageInstance[element]);
});
Then('I select {string} DropDown for entering value in {string} under {string}', { timeout: 20000 }, async function (columnName:string,page:string,pageName:string) {
  //  I select "Status" DropDown for entering value in "SearchUsers" under "companyManagementPage"
    const pageInstance = this.pages.get(pageName);
    if (!pageInstance) {
      throw new Error(`No page object found for key: ${pageName}`);
    }
    const eleName=page+columnName;
    commonPage=new CommonPage(this.page);
  const element= await commonPage.toCamelCase(eleName);
    // const elementName = eleName.replace(/[-\s.]/g, '')
  console.log(element);
    await commonPage.enterDataToDropdownFromMap(this.rowData,columnName,pageInstance[element]);
  });
  Then('I click {string} button in {string} under {string}', { timeout: 20000 }, async function (buttonName:string,page:string,pageName:string) {
    //  I click "Submit" button in "SearchUsers" under "companyManagementPage"
    playwrightDriver = new PlaywrightDriver(this.page);
      const pageInstance = this.pages.get(pageName);
      if (!pageInstance) {
        throw new Error(`No page object found for key: ${pageName}`);
    }
    const eleName=page+buttonName;
    commonPage=new CommonPage(this.page);
  const element= await commonPage.toCamelCase(eleName);
    // const elementName = eleName.replace(/[-\s.]/g, '')
  console.log(element);
    // const elementName = eleName.replace(/[-\s.]/g, '');
    
    await playwrightDriver.clickElement(pageInstance[element]);
    
});
Then('I click {string} button in {string}', { timeout: 20000 },
  async function (buttonName: string, page: string) {
    // If pageName is not provided, default to "commonPage"
    const resolvedPageName ="commonPage";

    playwrightDriver = new PlaywrightDriver(this.page);
    const pageInstance = this.pages.get(resolvedPageName);

    if (!pageInstance) {
      throw new Error(`No page object found for key: ${resolvedPageName}`);
    }

    const eleName = page + buttonName;
    commonPage=new CommonPage(this.page);
  const element= await commonPage.toCamelCase(eleName);
  console.log(element);
    await playwrightDriver.clickElement(pageInstance[element]);
  }
);

Then('I select {string} page for entering value from {string}', { timeout: 30000 }, async function (sheetName:string, fileName:string) {
  // I select "Users" page for entering value from "CompanyManagement"
  const fileConfig = ExcelFileConfig[fileName];
  if (!fileConfig) {
    throw new Error(`Excel config for "${fileName}" not found.`);
  }

  const filePath = fileConfig.file;
  // const sheetName = fileConfig.sheetName || 'Sheet1'; // Default to 'Sheet1' if not specified
  excelUtil = new ExcelUtil(filePath);
    const rowDataOld=excelUtil.getRandomRowAsMap(sheetName);
    this.rowData = rowDataOld;
    console.log(this.rowData);
    
  }); 