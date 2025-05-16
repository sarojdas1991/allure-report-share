
import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class HaulageDataPage extends BasePage {
  private readonly rightFrame: FrameLocator;
  private readonly innerFrame: FrameLocator;
  private readonly defaultOCHaulageType:Locator;
    private readonly haulageDataFlatFile:Locator;
    private readonly haulageDataStandard:Locator;
    private readonly haulageData301:Locator;
    private readonly hLShipperPoolCodes:Locator;
    private readonly hLCommExceptions:Locator;
    private readonly commExceptionscsv:Locator;
    private readonly oOCLCLF:Locator;

    // public UsersPageTitle: string;
 

  constructor(page: Page) {
    super(page);

    // Assumes page is already navigated
    this.rightFrame = this.getRightFrame();
    this.innerFrame=this.getInnerIframeInRightFrame();

    
    this.defaultOCHaulageType = this.rightFrame.locator("//td[text()='Default OC Haulage Type']");
    this.haulageDataFlatFile = this.rightFrame.locator("//td[text()='Haulage Data - Flat File']");
    this.haulageDataStandard= this.rightFrame.locator("//td[text()='Haulage Data - Standard']");
    this.haulageData301= this.rightFrame.locator("//td[text()='Haulage Data - 301']");
    this.hLShipperPoolCodes= this.rightFrame.locator("//td[text()='HL Shipper Pool Codes']");
    this.hLCommExceptions= this.rightFrame.locator("//td[text()='HL Comm Exceptions']");
    this.commExceptionscsv= this.rightFrame.locator("//td[text()='Comm Exceptions .csv']");
    this.oOCLCLF= this.rightFrame.locator("//td[text()='OOCL CLF']");


  }
}