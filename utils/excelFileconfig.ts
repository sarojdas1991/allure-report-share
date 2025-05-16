

export interface ExcelFileDetails {
    file: string;
    // sheetName: Record<string, string>; // You can type this further if needed
  }
  
  export const ExcelFileConfig: Record<string, ExcelFileDetails> = {
    CompanyManagement: {
                file: 'testData/demo/cms/dataManagement/companyManagement/CompanyManagement.xlsx',
              },
    InvoicesVouchers: {
                file: 'testData/demo/cms/billing/invoicesVouchers/InvoicesVouchers.xlsx',
        }
  };
  