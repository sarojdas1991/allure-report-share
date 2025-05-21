
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
    private readonly exportExcel: Locator;
    private readonly thisPageOnly: Locator;
    
 

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
    this.exportExcel = this.rightFrame.locator("//a[@title='Export to Excel']");
    this.thisPageOnly = this.rightFrame.locator("//a[@title='This Page Only']");

   

    

    
    
  }

  playwrightDriver = new PlaywrightDriver(this.page);

 /**
   * Verifies the visibility of the search link.
   * @returns {Promise<void>}
   */
  async verifySearchLink(): Promise<void> {
    
    await this.playwrightDriver.toBeVisible(this.searchLink);
    
  }
  /**
   * Clicks the search link to navigate to the search page.
   * @returns {Promise<void>}
   */
  async clickSearchLink(): Promise<void> {
   
    await this.playwrightDriver.clickElement(this.searchLink);
    
    
  }
   /**
   * Verifies the search page title.
   * @param pageName - The expected title of the search page.
   */

  async verifySearchPage(pageName:string): Promise<void> {
    
    const text = await this.playwrightDriver.getText(this.searchCompanies);
        console.log('Companies page text:', text);
        await this.playwrightDriver.exactText(text, pageName);

  }
  /**
   * Verifies the title of the Companies page.
   * @param lo - The locator for the element containing the title.
   * @param txt - The expected title text.
   */

  async verifyCompaniesPageTitle(lo:Locator,txt:string): Promise<void> {
    
    const text = await this.playwrightDriver.getText(lo);
    // const actText = text.replace(/[-\s]/g, '');
    const actText = text.replace(/[-\s.]/g, '')
        console.log('Companies page text:', actText);
        await this.playwrightDriver.exactText(actText, txt);
  }
  /**
   * Verifies the title of the Current page.
   * @param lo - The locator for the element containing the title.
   * @param txt - The expected title text.
   */
  async verifyCurrentPageTitle(lo:Locator,txt:string): Promise<void> {
    
    const text = await this.playwrightDriver.getText(lo);
    // const actText = text.replace(/[-\s]/g, '');
    const actText = text.replace(/[-\s.]/g, '')
        console.log('Companies page text:', actText);
        await this.playwrightDriver.exactText(actText, txt);
  }
  /**
   * Fills a text input field based on the provided column name and row data.
   * @param rowData - A Map containing the data for the row.  
   * @param columnName - The name of the column to fill the value from.
   * @param locator - The locator for the text input element.
   */

  async enterDataToTextFromMap(rowData:Map<string,string>,columnName:string,locator:Locator): Promise<void> {

    const value = rowData.get(columnName);
    console.log(value);

  if (value !== undefined) {
  await this.playwrightDriver.enterText(locator, value);
  } else {
  throw new Error(`Column '${columnName}' not found in row data.`);
   }
  }
  /**
   * Selects a value from a dropdown based on the provided column name and row data.
   * @param rowData - A Map containing the data for the row.  
   * @param columnName - The name of the column to select the value from.
   * @param locator - The locator for the dropdown element.
   */

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
  /**
   * verify if the filter is applied
   * @returns {Promise<void>}
   */

  async verifyFilterApplied(): Promise<void> { 
   
    await this.playwrightDriver.toBeVisible(this.filterApplied);
  }
  /**
   * remove the applied filter
   * @returns {Promise<void>}
   */

  async removeAppliedFilter(): Promise<void> {

    if (await this.playwrightDriver.isElementVisible(this.filterApplied)) {
      await this.playwrightDriver.clickElement(this.removeFilter);
    } else {
      console.log('No filter applied to remove.');
    }
  }
  /**
   * converts a string to camel case
   * @param str - The string to be converted
   * @returns {Promise<string>} - The camel case string
   */

  async toCamelCase(str: string) {
    return str
      .replace(/[-_\s.]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
      .replace(/^[A-Z]/, chr => chr.toLowerCase());
  }
  /**
   * download a file from the specified locator and save it in the downloads folder
   * @param locator - The locator of the element that triggers the download 
   * @param fileName - The name of the file to be saved
   * @returns {Promise<void>}
   */

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
    /**
   * Downloads a file from the specified locator and saves it in the folder with the same name as the file (without extension).
   * The folder is searched recursively under the base directory.
   * @param locator - The locator of the element that triggers the download.
   * @param fileName - The name of the file to be saved.
   * @returns {Promise<void>}
   * @throws {Error} - If the folder is not found or the file cannot be downloaded.
   * If the folder is not found or the file cannot be downloaded.
   */

    async downloadFileInFolder(locator: Locator, fileName: string): Promise<void> {
    const downloadPromise = this.page.waitForEvent('download');
    await locator.click();
    const download = await downloadPromise;

    const fileNameWithoutExt = fileName.split('.').slice(0, -1).join('.');
    const baseDir = path.resolve('testData/demo'); // Root directory to search
    const targetDir = this.findFolderRecursive(baseDir, fileNameWithoutExt);

    if (!targetDir) {
      console.error(`❌ Folder named "${fileNameWithoutExt}" not found under ${baseDir}`);
      return;
    }

    const fullPath = path.join(targetDir, fileName);
    await download.saveAs(fullPath);
    console.log(`✅ File downloaded to: ${fullPath}`);
  }

  /**
   * Recursively searches for a folder with the given name under a base directory.
   * If found, returns the full path to the folder; otherwise, returns null.
   * @param basePath - The base directory to start the search.
   * @param folderName - The name of the folder to search for.
   * @returns {string | null} - The full path to the folder if found; otherwise, null.
   */
  private findFolderRecursive(basePath: string, folderName: string): string | null {
    const items = fs.readdirSync(basePath, { withFileTypes: true });

    for (const item of items) {
      const itemPath = path.join(basePath, item.name);

      if (item.isDirectory()) {
        if (item.name === folderName) {
          return itemPath;
        }

        const found = this.findFolderRecursive(itemPath, folderName);
        if (found) return found;
      }
    }

    return null;
  }
  /**
   * Exports the current page data to an Excel file.
   * @param folderName - The name of the folder where the file will be saved.
   * @returns {Promise<void>}
   * @throws {Error} - If the file cannot be downloaded or saved.
   */
   async exportToExcel(folderName:string): Promise<void> {
  await this.playwrightDriver.clickElement(this.exportExcel);
  const fileName = folderName+'.xlsx';
   await this.downloadFileInFolder(this.thisPageOnly,fileName);
  }


}