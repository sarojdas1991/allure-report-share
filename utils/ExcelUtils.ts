

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
  /**
   * Get the names of all sheets in the workbook.
   * @returns {string[]} - An array of sheet names.
   */
  getSheet(sheetName: string): XLSX.WorkSheet {
    const sheet = this.workbook.Sheets[sheetName];
    if (!sheet) throw new Error(`Sheet "${sheetName}" not found`);
    return sheet;
  }
  /**
     * get all data from the specified sheet.
     * @param {string} sheetName - The name of the sheet to read from.
     * @returns {any[][]} - A 2D array of values from the specified sheet.
     */
  getAllData(sheetName: string): any[][] {
    const sheet = this.getSheet(sheetName);
    return XLSX.utils.sheet_to_json(sheet, { header: 1 });
  }
 /**
    * get row data from the specified sheet.
    * @param {string} sheetName - The name of the sheet to read from.
    * @param {number} rowIndex - The index of the row to read from (0-based).
    * @returns {any[]} - An array of values from the specified row.
    */
  getRow(sheetName: string, rowIndex: number): any[] {
    const data = this.getAllData(sheetName);
    if (rowIndex < 0 || rowIndex >= data.length) throw new Error(`Row index ${rowIndex} out of range`);
    return data[rowIndex];
  }
/**
   * Get a specific column's data from the specified sheet.
   * @param {string} sheetName - The name of the sheet to read from.  
   * @param {number} columnIndex - The index of the column to read from (0-based).
   * @returns {any[]} - An array of values from the specified column.
   */
  getColumn(sheetName: string, columnIndex: number): any[] {
    const data = this.getAllData(sheetName);
    return data.map(row => row[columnIndex]);
  }
  /**
     * Get a specific column's data from the specified sheet.
     * @param {string} sheetName - The name of the sheet to read from.
     * @param {string} columnName - The name of the column to read from.
     * @returns {any[]} - An array of values from the specified column.
     */
  getColumnData( sheetName: string, columnName: string): any[] {
    const sheet = this.getSheet(sheetName);
    const jsonData = XLSX.utils.sheet_to_json<Record<string, any>>(sheet, { defval: null }); // object-based parsing
    return jsonData.map(row => row[columnName]);
  }
  /**
   * Append a row to the specified sheet.
   * @param {string} sheetName - The name of the sheet to modify.
   * @param {any[]} row - The data to append as a new row.
   */
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
  /**
   * Append a column to the specified sheet.
   * @param {string} sheetName - The name of the sheet to modify.
   * @param {any[]} columnData - The data to append as a new column.
   */
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
  /**
   * Update a cell in the specified sheet.
   * @param {string} sheetName - The name of the sheet to modify.
   * @param {number} rowIndex - The index of the row to modify (0-based).
   * @param {number} columnIndex - The index of the column to modify (0-based).
   * @param {any} newValue - The new value to set in the cell.
   */
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
  /**
     * Delete a row from the specified sheet.
     * @param {string} sheetName - The name of the sheet to modify.
     */
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
  /**
   * Delete a column from the specified sheet.
   * @param {string} sheetName - The name of the sheet to modify.
   * @param {number} columnIndex - The index of the column to delete (0-based).
   */
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
  /**
   * Get a random number between min and max (inclusive).
   * @param {number} min - The minimum number.
   * @param {number} max - The maximum number.
   * @returns {number} - A random number between min and max.
   */
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  /**
   * Get a random cell value from the specified sheet and column.
   * @param {string} sheetName - The name of the sheet to read from.
   * @param {string} columnName - The name of the column to read from.
   * @returns {any} - The value of the random cell.
   */
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
  /**
   * Get a random row from the specified sheet as a Map.
   * @param {string} sheetName - The name of the sheet to read from.
   * @returns {Map<string, any>} - A Map representing the random row.
   */
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
