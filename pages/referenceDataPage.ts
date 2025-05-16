import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class ReferenceDataPage extends BasePage {
    
    private readonly rightFrame: FrameLocator;
    
    // 
    private readonly systemReferenceData: Locator;
    private readonly poolReferenceData: Locator;
    
 

    constructor(page: Page) {
        super(page);
        this.rightFrame = this.getRightFrame();
        
        this.systemReferenceData=this.rightFrame.locator('//td[@class="txtGray15Bold"]');
        this.poolReferenceData  =this.rightFrame.locator('//td[@class="txtGray15Bold"]');



    }
}