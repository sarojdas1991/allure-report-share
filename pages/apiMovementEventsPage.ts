
import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class ApiMovementEventPage extends BasePage {
  private readonly rightFrame: FrameLocator;
  private readonly innerFrame: FrameLocator;
  private readonly movementEventCustomers: Locator;
  private readonly movementEventTransactions: Locator;



  constructor(page: Page) {
    super(page);

    // Assumes page is already navigated
    this.rightFrame = this.getRightFrame();
    this.innerFrame=this.getInnerIframeInRightFrame();
    
    this.movementEventCustomers=this.rightFrame.locator(`//td[text()="Movement Event Customers"]`)
    this.movementEventTransactions=this.rightFrame.locator(`//td[text()="Movement Event Transactions"]`)

  }
}