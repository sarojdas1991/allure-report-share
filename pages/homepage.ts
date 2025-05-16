
import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class HomePage extends BasePage {
    private readonly leftFrame: FrameLocator;
    private readonly rightFrame: FrameLocator;
  public dataManagementMenu: Locator;
  public companyManagementMenu: Locator;
  public companiesMenu: Locator;
  public stagingCompaniesMenu: Locator;
  public usersMenu: Locator;
  public rolesMenu: Locator;
  public pairedMoveFTPSettingsMenu: Locator;
  public outboundEDI301FTPSettingsMenu: Locator;


  public poolManagementMenu: Locator;
  public poolsMenu: Locator;
  public extLocationsMenu: Locator;
  public exceptionExtLocationsMenu: Locator;


  public unitManagementMenu: Locator;
  public unitsMenu: Locator;


  public trackingMenu: Locator;
  public eDIMenu: Locator;
  public eDIFileProcessingMenu: Locator;
  public sentFileQueueMenu: Locator;

  public haulageDataMenu: Locator;
  public defaultOcHaulageTypeMenu: Locator;
  public haulageDataFlatFileMenu: Locator;
  public haulageDataStandardMenu: Locator;
  public haulageData301Menu: Locator;
  public hlShipperPoolCodesMenu: Locator;
  public hlCommExceptionsMenu: Locator;
  public commExceptionsCsvMenu: Locator;
  public ooclClfMenu: Locator;


  public aPIMovementEventsMenu: Locator;
  public movementEventCustomersMenu: Locator;
  public movementEventTransactionsMenu: Locator;
  
  public movementsMenu: Locator;
  public unitMovementsMenu: Locator;
  public unitRejectedMovesMenu: Locator;
  public archivedRejectedMovesMenu: Locator;


  public billingMenu: Locator;
  public billingRunMenu: Locator;
  public billingRunSubMenu: Locator;


  public systemAdministrationMenu: Locator;
  public referenceDataMenu: Locator;
  public systemReferenceDataMenu: Locator;
  public poolReferenceDataMenu: Locator;
  public quickTrackingMenu: Locator;



  constructor(page: Page) {
    super(page);

    // Assumes page is already navigated
    this.leftFrame = this.getLeftFrame();
    this.rightFrame=this.getRightFrame();

    // Define locators once
    this.dataManagementMenu=this.leftFrame.locator("//a[text()=' Data Management ']");
    this.companyManagementMenu=this.leftFrame.locator("//a[text()=' Company Management ']");
    this.companiesMenu=this.leftFrame.locator("//a[text()='Companies']");
    this.stagingCompaniesMenu=this.leftFrame.locator("//a[text()='Staging Companies']");
    this.usersMenu=this.leftFrame.locator("//a[text()='Users']");
    this.rolesMenu=this.leftFrame.locator("//a[text()='Roles']");
    this.pairedMoveFTPSettingsMenu=this.leftFrame.locator("//a[text()='Paired Move FTP Settings']");
    this.outboundEDI301FTPSettingsMenu=this.leftFrame.locator("//a[text()='Outbound EDI 301 FTP Settings']");

    this.poolManagementMenu=this.leftFrame.locator("//a[text()=' Pool Management ']");
    this.poolsMenu=this.leftFrame.locator("//a[text()='Pools']");
    this.extLocationsMenu=this.leftFrame.locator("//a[text()='Ext-Locations']");
    this.exceptionExtLocationsMenu=this.leftFrame.locator("//a[text()='Exception Ext-Locations']");

    
    this.unitManagementMenu=this.leftFrame.locator("//a[text()=' Unit Management ']");
    this.unitsMenu=this.leftFrame.locator("//a[text()='Units']");


    this.trackingMenu=this.leftFrame.locator("//a[text()=' Tracking ']");
    this.eDIMenu=this.leftFrame.locator("//a[text()=' EDI ']");
    this.eDIFileProcessingMenu=this.leftFrame.locator("//a[text()='EDI File Processing']");
    this.sentFileQueueMenu=this.leftFrame.locator("//a[text()='Sent File Queue']");

    this.haulageDataMenu = this.leftFrame.locator("//a[text()=' Haulage Data ']");
    this.defaultOcHaulageTypeMenu = this.leftFrame.locator("//a[text()='Default OC Haulage Type']");
    this.haulageDataFlatFileMenu = this.leftFrame.locator("//a[text()='Haulage Data - Flat File']");
    this.haulageDataStandardMenu = this.leftFrame.locator("//a[text()='Haulage Data - Standard']");
    this.haulageData301Menu = this.leftFrame.locator("//a[text()='Haulage Data - 301']");
    this.hlShipperPoolCodesMenu = this.leftFrame.locator("//a[text()='HL Shipper Pool Codes']");
    this.hlCommExceptionsMenu = this.leftFrame.locator("//a[text()='HL Comm Exceptions']");
    this.commExceptionsCsvMenu = this.leftFrame.locator("//a[text()='Comm Exceptions .csv']");
    this.ooclClfMenu = this.leftFrame.locator("//a[text()='OOCL CLF']");


    this.movementsMenu = this.leftFrame.locator("//a[text()=' Movements ']");
    this.unitMovementsMenu= this.leftFrame.locator("//a[text()='Unit Movements']");
    this.unitRejectedMovesMenu= this.leftFrame.locator("//a[text()='Unit Rejected Moves']");
    this.archivedRejectedMovesMenu= this.leftFrame.locator("//a[text()='Archived Rejected Moves']");




    this.aPIMovementEventsMenu = this.leftFrame.locator("//a[text()=' API Movement Events ']");
    this.movementEventCustomersMenu = this.leftFrame.locator("//a[text()='Movement Event Customers']");
    this.movementEventTransactionsMenu = this.leftFrame.locator("//a[text()='Movement Event Transactions']");


    this.quickTrackingMenu = this.leftFrame.locator("//a[text()=' Quick Track ']");


    this.billingMenu = this.leftFrame.locator("//a[text()=' Billing ']");
    this.billingRunMenu = this.leftFrame.locator("//a[text()=' Billing Run ']");
    this.billingRunSubMenu = this.leftFrame.locator("//a[text()='Billing Run']");


    this.systemAdministrationMenu = this.leftFrame.locator("//a[text()=' System Administration ']");
    this.referenceDataMenu = this.leftFrame.locator("//a[text()=' Reference Data ']");
    this.systemReferenceDataMenu = this.leftFrame.locator("//a[text()='System Reference Data']");
    this.poolReferenceDataMenu = this.leftFrame.locator("//a[text()='Pool Reference Data']");
    


    
  }
  // get datamanagementmenu(): Locator {
  //   return this.leftFrame.locator("//a[text()=' Data Management ']");
  // }



















































  async navigateToCompanies(): Promise<void> {
    // await this.dataManagementMenu.click();
    // await this.companyManagementMenu.click();
    // await this.copaniesMenu.click();
  }

  async navigateToGivenPage(pageName: string): Promise<void> {
    // const leftFrame = this.getLeftFrame();
    // await leftFrame.locator(`//a[text()='${pageName}']`).click();
    const currentPage= this.leftFrame.locator(`//a[text()='${pageName}']`);
    await this.click(currentPage);
  }

  async navigateToGivenMenu(menuName: string): Promise<void> {
   
     const menu= this.leftFrame.locator(`//a[text()=' ${menuName} ']`);
    await this.click(menu);

  }

  // async verifyGivenPage(pageText: string): Promise<void> {
    
  //   //  const pageTitle= this.rightFrame.locator(`//td[@class="txtBlack11Bold"]//span[text()='${pageText}']`);
  //   //  const pageTitle= this.rightFrame.locator
  //   //  await this.expectText(this.companies,pageText)
    

  // }

}
