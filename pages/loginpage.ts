
import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';
import { PlaywrightDriver } from '../utils/playwrightdriver';
import {credentials} from '../testData/demo/cms/cmsCredental';


export class LoginPage extends BasePage {
  private readonly mainFrame: FrameLocator;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  

  constructor(page: Page) {
    super(page);

    // Assumes page is already navigated
    this.mainFrame = this.getMainFrame();

    // Define locators once
    this.emailInput = this.mainFrame.locator('#tbEmail');
    this.passwordInput = this.mainFrame.locator('input[type="password"]');
    this.loginButton = this.mainFrame.locator('#lbnLogin');
  }
  playwrightDriver = new PlaywrightDriver(this.page);

  /**
   * Perform login with email and password
   */
  async login(usernameKey: string, passwordKey: string): Promise<void> {
    const URL = credentials.url
    await this.playwrightDriver.visit(URL);
    const username = credentials[usernameKey as keyof typeof credentials];
    const password = credentials[passwordKey as keyof typeof credentials];
    await this.playwrightDriver.enterText(this.emailInput,username);
    await this.playwrightDriver.enterText(this.passwordInput,password);
    await this.playwrightDriver.clickElement(this.loginButton);
  }

  /**
   * Validate login was successful by checking the current URL
   */
  async validateLoginSuccess(): Promise<void> {
    await expect(this.page).toHaveURL('https://cmsdemo.euoutsourcing.com/CMSystem.htm');
  
  }

  
}
