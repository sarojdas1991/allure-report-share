// import { Page, Locator, FrameLocator, expect } from '@playwright/test';
// import { BasePage } from './basepage';

// export class InvoicePage extends BasePage {
//   constructor(page: Page) {
//     super(page);
//   }

//   /**
//    * Fill invoice number and click search
//    */
//   async findInvoice(invoiceNumber: string): Promise<void> {
//     const rightFrame = this.getRightFrame();
//     await rightFrame.locator('#ContentPlaceHolder1_tbInvoiceNumber').fill(invoiceNumber);
//     await rightFrame.locator('#ContentPlaceHolder1_lbnFind').click();
//     // await page.waitForTimeout(5000);
//   }

//   /**
//    * Verify if the invoice number appears in the result list
//    */
//   async verifyInvoice(invoiceNumber: string): Promise<void> {
//     const rightFrame = this.getRightFrame();
//     const invoiceCell = rightFrame.locator("//tr[@class='grvRowStyle1']//td[4]");
//     console.log("Actual :"+invoiceCell);
//     console.log("Expected :"+invoiceNumber);

//     await this.expectText(invoiceCell, invoiceNumber);
//   }

//   /**
//    * Select invoice checkbox
//    */
//   async selectInvoiceCheckbox(): Promise<void> {
//     const rightFrame = this.getRightFrame();
//     await rightFrame.locator("[id^='chkItem']").first().click(); // more dynamic
//   }

//   /**
//    * Open options menu and click Download Invoices
//    */
//   async clickDownloadOptions(): Promise<void> {
//     const rightFrame = this.getRightFrame();
//     await rightFrame.locator('#ContentPlaceHolder1_ahOptions').click();
//     await rightFrame.locator("[title='Download Invoices']").click();
//   }

//   /**
//    * Download the invoice via inner iframe
//    */
//   async confirmAndDownloadInvoice(): Promise<void> {
//     // const innerFrame = this.getInnerIframeInRightFrame(); // defaults to #ifrMaster
//     // const label = innerFrame.locator('#ContentPlaceHolder1_lblNoOfInvoices');
//     // const message = await this.getText(label);
//     // console.log("Invoice Download Message:", message);

//     // await innerFrame.locator("//a[text()='Download']").click();
//     // await innerFrame.locator("//a[text()='Cancel']").click();

//     const innerFrame = this.getInnerIframeInRightFrame(); // e.g., #ifrMaster
//   const label = innerFrame.locator('#ContentPlaceHolder1_lblNoOfInvoices');
//   const message = await this.getText(label);
//   console.log("Invoice Download Message:", message);

//   const downloadPromise = this.page.waitForEvent('download'); // Wait for download to trigger
//   await innerFrame.locator("//a[text()='Download']").click();
//   const download = await downloadPromise;

//   // Save the file to a specific path if needed
//   // const filePath = './downloads/invoice.pdf';
//   // await download.saveAs(filePath);
//   // console.log(`✅ Invoice downloaded to: ${filePath}`);
//   const zipFilePath = './downloads/invoices.zip';
//   await download.saveAs(zipFilePath);
//   console.log(`✅ ZIP file downloaded to: ${zipFilePath}`);

//   await innerFrame.locator("//a[text()='Cancel']").click(); // Optional
//   }

//   /**
//    * Close Options Menu
//    */
//   async closeOptionsMenu(): Promise<void> {
//     const rightFrame = this.getRightFrame();
//     await rightFrame.locator("//div[@id='divMenu']//a[@title='Close']").click();
//   }

  /**
   * Export current list to Excel
   */
//   async exportToExcel(): Promise<void> {
//     const rightFrame = this.getRightFrame();
    
//     await rightFrame.locator("//a[@title='Export to Excel']").click();

//     const lc= rightFrame.locator("//a[@title='This Page Only']")

//    await this.downloadFile(lc,"invoice1.xlsx");
//   }

//   /**
//    * Get applied filter message
//    */
//   async getFilterText(): Promise<string | null> {
//     const rightFrame = this.getRightFrame();
//     return await rightFrame.locator('#ContentPlaceHolder1_lblFilterApplied').textContent();
//   }

//   /**
//    * Remove filter
//    */
//   async removeFilter(): Promise<void> {
//     const rightFrame = this.getRightFrame();
//     await rightFrame.locator('#ContentPlaceHolder1_lbnRemoveFilter').click();
//   }
// }
