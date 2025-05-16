

import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

export class ExcelUtil {
  private workbook: XLSX.WorkBook;
  private filePath: string;

  constructor(filePath: string) {
    if (!fs.existsSync(filePath)) {
      throw new Error(`Excel file not found at path: ${filePath}`);
    }
    this.filePath = filePath;
    this.workbook = XLSX.readFile(filePath);
  }

  getSheet(sheetName: string): XLSX.WorkSheet {
    const sheet = this.workbook.Sheets[sheetName];
    if (!sheet) throw new Error(`Sheet "${sheetName}" not found`);
    return sheet;
  }

  getAllData(sheetName: string): any[][] {
    const sheet = this.getSheet(sheetName);
    return XLSX.utils.sheet_to_json(sheet, { header: 1 });
  }

  getRow(sheetName: string, rowIndex: number): any[] {
    const data = this.getAllData(sheetName);
    if (rowIndex < 0 || rowIndex >= data.length) throw new Error(`Row index ${rowIndex} out of range`);
    return data[rowIndex];
  }

  getColumn(sheetName: string, columnIndex: number): any[] {
    const data = this.getAllData(sheetName);
    return data.map(row => row[columnIndex]);
  }
  getColumnData( sheetName: string, columnName: string): any[] {
    const sheet = this.getSheet(sheetName);
    const jsonData = XLSX.utils.sheet_to_json<Record<string, any>>(sheet, { defval: null }); // object-based parsing
    return jsonData.map(row => row[columnName]);
  }

  appendRow(sheetName: string, row: any[]): void {
    const sheet = this.getSheet(sheetName);
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];
  
    if (!Array.isArray(row)) {
      throw new Error('Row must be an array of values');
    }
  
    data.push(row);
    const newSheet = XLSX.utils.aoa_to_sheet(data);
    this.workbook.Sheets[sheetName] = newSheet;
    XLSX.writeFile(this.workbook, this.filePath);
  }

  // appendColumn(sheetName: string, columnData: any[]): void {
  //   const sheet = this.getSheet(sheetName);
  //   const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];
  
  //   for (let i = 0; i < columnData.length; i++) {
  //     if (!Array.isArray(data[i])) data[i] = [];
  //     data[i].push(columnData[i]);
  //   }
  
  //   const newSheet = XLSX.utils.aoa_to_sheet(data);
  //   this.workbook.Sheets[sheetName] = newSheet;
  //   XLSX.writeFile(this.workbook, this.filePath);
  // }

  appendColumn1(sheetName: string, columnData: any[]): void {
    const sheet = this.getSheet(sheetName);
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];
  
    for (let i = 0; i < columnData.length; i++) {
      if (!Array.isArray(data[i])) data[i] = [];
      data[i].push(columnData[i]);
    }
  
    const newSheet = XLSX.utils.aoa_to_sheet(data);
    this.workbook.Sheets[sheetName] = newSheet;
  
    try {
      XLSX.writeFile(this.workbook, this.filePath);
      console.log(`✅ Column appended and file saved successfully.`);
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === 'EBUSY') {
        console.error(`❌ File is currently open or locked: ${this.filePath}. Please close it and try again.`);
      } else {
        throw err;
      }
    }
  }

  updateCell(sheetName: string, rowIndex: number, columnIndex: number, newValue: any): void {
    const sheet = this.getSheet(sheetName);
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];
  
    if (!data[rowIndex]) data[rowIndex] = [];
    data[rowIndex][columnIndex] = newValue;
  
    const newSheet = XLSX.utils.aoa_to_sheet(data);
    this.workbook.Sheets[sheetName] = newSheet;
    XLSX.writeFile(this.workbook, this.filePath);
  }

  saveAs(newFilePath: string): void {
    XLSX.writeFile(this.workbook, newFilePath);
  }
  
  deleteRow(sheetName: string, rowIndex: number): void {
    const sheet = this.getSheet(sheetName);
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];
  
    if (rowIndex < 0 || rowIndex >= data.length) {
      throw new Error(`Row index ${rowIndex} out of range`);
    }
  
    data.splice(rowIndex, 1); // Remove the row
  
    const newSheet = XLSX.utils.aoa_to_sheet(data);
    this.workbook.Sheets[sheetName] = newSheet;
    XLSX.writeFile(this.workbook, this.filePath);
  }

  deleteColumn(sheetName: string, columnIndex: number): void {
    const sheet = this.getSheet(sheetName);
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];
  
    for (let i = 0; i < data.length; i++) {
      if (data[i] && columnIndex < data[i].length) {
        data[i].splice(columnIndex, 1); // Remove the column value from each row
      }
    }
  
    const newSheet = XLSX.utils.aoa_to_sheet(data);
    this.workbook.Sheets[sheetName] = newSheet;
    XLSX.writeFile(this.workbook, this.filePath);
  }
  getSheetAsJson(sheetName: string): Record<string, any>[] {
    const sheet = this.getSheet(sheetName);
    const jsonData = XLSX.utils.sheet_to_json<Record<string, any>>(sheet, { defval: null });
    return jsonData;
  }
 
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getCellValue(sheetName: string, columnName: string): any {
    try {
      const sheet = this.getSheet(sheetName);
      const jsonData = XLSX.utils.sheet_to_json<Record<string, any>>(sheet, { defval: null });
  
      if (jsonData.length === 0) {
        throw new Error(`Sheet "${sheetName}" is empty.`);
      }
  
      const rowIndex = this.getRandomNumber(0, jsonData.length - 1);
  
      const row = jsonData[rowIndex];
      if (!(columnName in row)) {
        throw new Error(`Column "${columnName}" not found in row ${rowIndex}.`);
      }
  
      console.log(`✅ Row index: ${rowIndex}, Column: ${columnName}, Value: ${row[columnName]}`);
      return row[columnName];
  
    } catch (error) {
      console.error(`❌ Error reading cell value: ${(error as Error).message}`);
      return null; // Or rethrow if you want to propagate
    }

    
  }

  getRandomRowAsMap(sheetName: string): Map<string, any> {
    const sheet = this.getSheet(sheetName);
    const jsonData = XLSX.utils.sheet_to_json<Record<string, any>>(sheet, { defval: null });
  
    if (jsonData.length === 0) {
      throw new Error("Sheet is empty.");
    }
  
    const randomIndex = this.getRandomNumber(0, jsonData.length - 1); // Adjusted to 0-based index
    const rowObject = jsonData[randomIndex];
  
    const rowMap = new Map<string, any>();
    Object.keys(rowObject).forEach((key) => {
      rowMap.set(key, rowObject[key]);
    });
  
    console.log(`✅ Random Row Index: ${randomIndex}`);
    return rowMap;
  }
  
  
  
}
