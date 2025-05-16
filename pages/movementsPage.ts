
import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class MovementsPage extends BasePage {
  private readonly rightFrame: FrameLocator;
  private readonly innerFrame: FrameLocator;
  private readonly archivedRejectedMoves: Locator;
  private readonly unitMovements: Locator;
  private readonly unitRejectedMoves: Locator;



  constructor(page: Page) {
    super(page);

    // Assumes page is already navigated
    this.rightFrame = this.getRightFrame();
    this.innerFrame=this.getInnerIframeInRightFrame();
    
    
    this.archivedRejectedMoves = this.rightFrame.locator("//td[contains(text(),'Archived Rejected Moves')]");
    this.unitMovements = this.rightFrame.locator("//td[@class='txtBlack11Bold']//span[text()='Unit Movements']");
    this.unitRejectedMoves = this.rightFrame.locator("//td[@class='txtGray15Bold']/text()[1]");


  }
}