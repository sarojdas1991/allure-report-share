// import { Given, When, Then  } from '@cucumber/cucumber';
// import { ExcelUtil } from '../../utils/ExcelUtils';

// const excelUtil=new ExcelUtil('./downloads/InvoiceBill.xlsx');

// Given('I read the data from file',  async function () {
 
 
//   console.log("Reading the data from file");
//   // const data= ExcelUtil.readExcel('./downloads/invoice.xlsx','Invoice Bill');
 
//   const data= excelUtil.getSheetAsJson('Invoice Bill');
//   // console.log(data)

// });
// When(
//   'print column data',
//   async function () {
    
//     console.log("Print column data from file");
//     // const colData=ExcelUtil.getColumnData('./downloads/invoice.xlsx', 'Invoice Bill', 'Total Amount');
//     const colData=excelUtil.getColumnData('Invoice Bill','Total Amount');
//     const colData1=excelUtil.getColumn('Invoice Bill',5);
//     const cellValue=excelUtil.getCellValue('Invoice Bill','Invoice #');
//     // excelUtil.appendColumn('Invoice Bill',['Col1', 'Col2', 'Col3']);

//     // console.log(colData);
//     // console.log(colData1);
//     console.log(cellValue);
  
//   }
// );
// Then ('print row data',  async function () {
 
//     console.log("Print row data from file");
//     // const rowData=ExcelUtil.getRowByIndex('./downloads/invoice.xlsx', 'Invoice Bill',0)
//     const rowData=excelUtil.getRow( 'Invoice Bill',1)
//     console.log(rowData);
//     const rowData1=excelUtil.getRow( 'Invoice Bill',0)
//     const rowData2=excelUtil.getRandomRowAsMap('Voucher Bill');
//     console.log(rowData2.get("Voucher #"));
//     console.log(rowData2.get("Pool"));
//     console.log(rowData2.get("Company"));
//     console.log(rowData2.get("Invoice Type"));
  
//   });