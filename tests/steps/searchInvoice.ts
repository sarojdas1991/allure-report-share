
// import { Given, When, Then } from '@cucumber/cucumber';
// // import { Browser, Page, chromium, expect } from '@playwright/test';
// import { BillingPage } from '../../pages/billingpagge';
// import { LoginPage } from '../../pages/loginpage';
// import {InvoicePage} from '../../pages/invoicepage'
// import { ExcelUtil } from '../../utils/ExcelUtils';

// // const excelUtil=new ExcelUtil('./downloads/InvoiceBill.xlsx');
// // const excelUtil=new ExcelUtil('./testData/demo/cms/billing/invoicesVouchers/InvoicesVouchers.xlsx');


// // // let browser: Browser;
// // // let page: Page;
// // let billingPage: BillingPage;
// // let loginPage: LoginPage;
// // let invoicePage:InvoicePage;

// // // Given('I am logged into the CMS application', { timeout: 20000 },async function () {
    
// // //     // assuming 'this.page' is passed from the world/context 
// // //   await this.page.goto('https://cmsdemo.euoutsourcing.com/CMSystem.htm');
// // //   loginPage = new LoginPage(this.page); 
// // //   billingPage = new BillingPage(this.page);
// // //   invoicePage =new InvoicePage(this.page);

// // //   await loginPage.login('yaswanth.leburu@atmecs.com', 'Yaswanth@1234');
// // //   // await loginPage.login('madhusudhan.gupta@atmecs.com', 'Technical@1');
// // //   await loginPage.validateLoginSuccess();
// // // });

// // When('I navigate to the Invoices section from Billing menu',{ timeout: 20000 }, async function () {
// //   billingPage = new BillingPage(this.page);
// //   invoicePage =new InvoicePage(this.page);
// //   await billingPage.navigateToInvoices();
// // });
// // When('I navigate to the Voucher section from Billing menu',{ timeout: 20000 }, async function () {
// //   await billingPage.navigateToVoucher();
// // });

// // When('I search for invoice number {string}', { timeout: 20000 },async function (invoiceNumber: string) {
// //   this.invoiceNumber = invoiceNumber;
// //   await billingPage.searchInvoice(invoiceNumber);
// //   await this.page.waitForTimeout(5000);
// // });

// // Then('I should see the invoice listed in the search result', { timeout: 20000 },async function () {
// //   await invoicePage.verifyInvoice(this.invoiceNumber);
// // });


// // When('I select the invoice and choose to download it', { timeout: 20000 },async function () {
// //   await invoicePage.selectInvoiceCheckbox();
// //   await invoicePage.clickDownloadOptions();
// // });

// // When('I confirm the invoice download',{ timeout: 20000 }, async function () {
// //   await invoicePage.confirmAndDownloadInvoice();
// // });

// // Then('the download confirmation message should be displayed',{ timeout: 20000 }, async function () {
// //   // Can check message if needed or assert dialog behavior in the BillingPage methods.
// //   console.log('Invoice download confirmed.');
// // });

// // When('I export the invoice list to Excel', { timeout: 20000 },async function () {
// //   await invoicePage.exportToExcel();
// // });

// // Then('the filter information should be visible',{ timeout: 20000 }, async function () {
// //   const filterText = await invoicePage.getFilterText();
// //   console.log('Filter Applied:', filterText);
// // });

// // When('I remove the filter', { timeout: 20000 },async function () {
// //   await billingPage.removeFilter();
// // });

// // Then('the invoice list should be reset', { timeout: 20000 },async function () {
// //   // You can add assertions here based on the reset behavior or check if invoices reset
// //   console.log('Filter removed, invoice list reset.');
// // });

// // // Then('I log out from the CMS application',{ timeout: 20000 }, async function () {
// // //   await billingPage.logout();
// // //   // await browser.close();
// // // });

// // When('I search for {string}', { timeout: 20000 },async function (invoiceNumber: string) {
// //   const cellValue=excelUtil.getCellValue('Invoice Bill',invoiceNumber);
// //   this.invoiceNumber = cellValue;
// //   await billingPage.searchInvoice(cellValue);
// //   await this.page.waitForTimeout(5000);
// // });
// // When('I search for {string} from {string} sheet', { timeout: 20000 },async function (columnName: string,sheetName:string) {
// //   const cellValue=excelUtil.getCellValue(sheetName,columnName);
// //   this.invoiceNumber = cellValue;
// //   await billingPage.searchInvoice(cellValue);
// //   await this.page.waitForTimeout(5000);
// // });