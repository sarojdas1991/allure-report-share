
import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class EDIPage extends BasePage {
  private readonly rightFrame: FrameLocator;
  private readonly innerFrame: FrameLocator;
  private readonly sentFileQueue:Locator;

    // public UsersPageTitle: string;
 

  constructor(page: Page) {
    super(page);

    // Assumes page is already navigated
    this.rightFrame = this.getRightFrame();
    this.innerFrame=this.getInnerIframeInRightFrame();
    
    this.sentFileQueue=this.rightFrame.locator(`//td[text()="Sent File Queue"]`)

  }
}