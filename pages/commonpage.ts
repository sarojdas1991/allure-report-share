
import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';
import { PlaywrightDriver } from '../utils/playwrightdriver';
import { ExcelUtil } from '../utils/ExcelUtils';
import fs from 'fs';
import path from 'path';
import * as XLSX from 'xlsx';
// import { K, V } from '@faker-js/faker/dist/airline-BUL6NtOJ';

const excelUtil=new ExcelUtil('./downloads/CompanyManagement.xlsx');
let page: Page;
export class CommonPage extends BasePage {
  // private readonly playwrightDriver: PlaywrightDriver;
    private readonly rightFrame: FrameLocator;
    private readonly innerFrame: FrameLocator;
    private readonly topFrame: FrameLocator;
    private readonly searchLink: Locator;
    private readonly logout: Locator;
    private readonly searchCompanies: Locator;
    private readonly filterApplied: Locator;
    private readonly removeFilter: Locator;
    private readonly searchUsersClear: Locator;
    private readonly searchUsersSearch: Locator;
    
 

  constructor(page: Page) {
    super(page);
    // this.playwrightDriver = new PlaywrightDriver(page);
    // Assumes page is already navigated
    this.rightFrame = this.getRightFrame();
    this.innerFrame=this.getInnerIframeInRightFrame();
    this.topFrame=this.getTopFrame();

    // Define locators once
    this.logout=this.topFrame.locator("#lbnLogout");
    this.searchLink=this.rightFrame.locator("//a[@title='Search']");
    this.searchCompanies =this.innerFrame.locator("//td[@class='txtGray15Bold']");
    this.filterApplied = this.rightFrame.locator("#ContentPlaceHolder1_lblFilterApplied");
    this.removeFilter = this.rightFrame.locator('#ContentPlaceHolder1_lbnRemoveFilter');
    this.searchUsersClear=this.innerFrame.locator("#ContentPlaceHolder1_lbnClear");
    this.searchUsersSearch=this.innerFrame.locator("#ContentPlaceHolder1_lbnSave");

   

    

    
    
  }

  playwrightDriver = new PlaywrightDriver(this.page);

  async verifySearchLink(): Promise<void> {
    
    await this.playwrightDriver.toBeVisible(this.searchLink);
    
  }

  async clickSearchLink(): Promise<void> {
   
    await this.playwrightDriver.clickElement(this.searchLink);
    
    
  }

  async verifySearchPage(pageName:string): Promise<void> {
    
    const text = await this.playwrightDriver.getText(this.searchCompanies);
        console.log('Companies page text:', text);
        await this.playwrightDriver.exactText(text, pageName);

  }

  async verifyCompaniesPageTitle(lo:Locator,txt:string): Promise<void> {
    
    const text = await this.playwrightDriver.getText(lo);
    // const actText = text.replace(/[-\s]/g, '');
    const actText = text.replace(/[-\s.]/g, '')
        console.log('Companies page text:', actText);
        await this.playwrightDriver.exactText(actText, txt);
  }

  async enterDataToTextFromMap(rowData:Map<string,string>,columnName:string,locator:Locator): Promise<void> {

    const value = rowData.get(columnName);
    console.log(value);

  if (value !== undefined) {
  await this.playwrightDriver.enterText(locator, value);
  } else {
  throw new Error(`Column '${columnName}' not found in row data.`);
   }
  }


  async enterDataToDropdownFromMap(rowData:Map<string,string>,columnName:string,locator:Locator): Promise<void> {

    const value = rowData.get(columnName);
    console.log(value);

  if (value !== undefined) {
  await this.playwrightDriver.selectDropdownByText(locator, value);
  } else {
  throw new Error(`Column '${columnName}' not found in row data.`);
}
  }


   /**
   * Log out of the system
   */
  async performLogout(): Promise<void> {
    await this.playwrightDriver.clickElement(this.logout);
  }

  async verifyFilterApplied(): Promise<void> { 
   
    await this.playwrightDriver.toBeVisible(this.filterApplied);
  }

  async removeAppliedFilter(): Promise<void> {

    if (await this.playwrightDriver.isElementVisible(this.filterApplied)) {
      await this.playwrightDriver.clickElement(this.removeFilter);
    } else {
      console.log('No filter applied to remove.');
    }
  }

  async toCamelCase(str: string) {
    return str
      .replace(/[-_\s.]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
      .replace(/^[A-Z]/, chr => chr.toLowerCase());
  }

  async downloadFile(locator: Locator,fileName: string): Promise<void> {

    const downloadPromise = this.page.waitForEvent('download'); // Wait for download to trigger
  
    await this.click(locator);
    
    const download = await downloadPromise;
  
     const downloadPath = './downloads';
     if (!fs.existsSync(downloadPath)) {
       fs.mkdirSync(downloadPath);
     }
     const fullPath = path.join(downloadPath, fileName);
     await download.saveAs(fullPath);
     console.log(`✅ File downloaded to: ${fullPath}`);
  
    }


}