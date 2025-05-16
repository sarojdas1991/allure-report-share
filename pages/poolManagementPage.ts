
import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class PoolManagementPage extends BasePage {
  private readonly rightFrame: FrameLocator;
  private readonly innerFrame: FrameLocator;
  private readonly pools:Locator;
  private readonly extLocations:Locator;
  private readonly exceptionExtLocations:Locator;


    // public UsersPageTitle: string;
 

  constructor(page: Page) {
    super(page);

    // Assumes page is already navigated
    this.rightFrame = this.getRightFrame();
    this.innerFrame=this.getInnerIframeInRightFrame();

    
    this.pools=this.rightFrame.locator(`//td[@class="txtBlack11Bold"]//span[text()='Pools']`)
    this.extLocations=this.rightFrame.locator(`//td[text()="Ext-Locations"]`)
    this.exceptionExtLocations=this.rightFrame.locator(`//td[text()="Exception Ext-Locations"]`)


  }
}