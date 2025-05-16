
import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';
import { th } from '@faker-js/faker/.';

export class CompanyManagementPage extends BasePage {
  private readonly rightFrame: FrameLocator;
  private readonly innerFrame: FrameLocator;
  private readonly searchLink: Locator;
  private readonly searchCompanies: Locator;
  private readonly companies:Locator;
  private readonly users:Locator;
  private readonly searchUsersCompany:Locator;
  private readonly searchUsersFirstName:Locator;
  private readonly searchUsersLastName:Locator;
  private readonly searchUsersEmail:Locator;
  private readonly searchUsersStatus:Locator;
  private readonly searchUsersClear:Locator;
  private readonly searchUsersSearch:Locator;


  private readonly roles:Locator;
  private readonly pairedMoveFTPSettings:Locator;
  private readonly outboundEDI301FTPSettings:Locator;


    // public UsersPageTitle: string;
 

  constructor(page: Page) {
    super(page);

    // Assumes page is already navigated
    this.rightFrame = this.getRightFrame();
    this.innerFrame=this.getInnerIframeInRightFrame();

    this.searchLink=this.rightFrame.locator("//a[@title='Search']");
    this.searchCompanies =this.innerFrame.locator("//td[@class='txtGray15Bold']");
    this.companies=this.rightFrame.locator(`//td[@class="txtBlack11Bold"]//span[text()='Companies']`)
    
    
    
    




    // Define locators for Staging Companies



    // Define locators for Users
    this.users=this.rightFrame.locator(`//td[text()="Users"]`)
    this.searchUsersCompany=this.innerFrame.locator(`//input[@id='ContentPlaceHolder1_tbCompany']`)
    this.searchUsersFirstName=this.innerFrame.locator(`#ContentPlaceHolder1_tbFirstName`)
    this.searchUsersLastName=this.innerFrame.locator(`#ContentPlaceHolder1_tbLastName`)
    this.searchUsersEmail=this.innerFrame.locator(`#ContentPlaceHolder1_tbEmail`)
    this.searchUsersStatus=this.innerFrame.locator(`#ContentPlaceHolder1_ddlStatus`)
    this.searchUsersClear=this.innerFrame.locator("#ContentPlaceHolder1_lbnClear");
    this.searchUsersSearch=this.innerFrame.locator("#ContentPlaceHolder1_lbnSave");



    // Define locators for Roles
    this.roles=this.rightFrame.locator(`//td[@class="txtBlack11Bold"]//span[text()='Roles']`)





    // Define locators for Paired Move Ftp Settings
    this.pairedMoveFTPSettings=this.rightFrame.locator(`//td[text()="Paired Move FTP Settings"]`)





    // Define locators for Outbound Edi 301 Ftp Settings
    this.outboundEDI301FTPSettings=this.rightFrame.locator(`//td[text()="Outbound EDI 301 FTP Settings"]`)



    
    
  }
  
}