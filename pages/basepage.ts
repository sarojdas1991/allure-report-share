
import { Page, FrameLocator, Locator, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import * as XLSX from 'xlsx';

export class BasePage {
  protected readonly page: Page;
  private static readonly maxTimeout=10000;

  constructor(page: Page) {
    this.page = page;
  }

  // ---------- Utility Methods ----------

  // async visit(url: string): Promise<void> {
  //   await this.page.goto(url);
  // }
 /**
   * Click on a locator.
   * @param {string | Locator} locator - The locator to click on.
   */
  async click(locator: string | Locator): Promise<void> {
    await (typeof locator === 'string' ? this.page.locator(locator) : locator).click();
  }
 /**
   * Fill a locator with a value.
   * @param {string | Locator} locator - The locator to fill.
   */
  async fill(locator: string | Locator, value: string): Promise<void> {
    await (typeof locator === 'string' ? this.page.locator(locator) : locator).fill(value);
  }
  /**
   * Get the value of a locator.
   * @param {string | Locator} locator - The locator to get the value from.
   */

  async getText(locator: string | Locator): Promise<string> {
    return (await (typeof locator === 'string' ? this.page.locator(locator) : locator).textContent()) || '';
  }
  /**
   * check if a locator is visible.
   * @param {string | Locator} locator - The locator to check.
   */
  async isVisible(locator: string | Locator): Promise<boolean> {
    return (typeof locator === 'string' ? this.page.locator(locator) : locator).isVisible();
  }
  /**
   * check expected text with actual text.
   * @param {string} text - The expected text.
   * @param {string | Locator} locator - The locator to check.
   */
  async expectText(locator: string | Locator, text: string): Promise<void> {
    await expect(typeof locator === 'string' ? this.page.locator(locator) : locator).toContainText(text);
  }

  async waitForTimeout(ms: number): Promise<void> {
    await this.page.waitForTimeout(ms);
  }
  async waitForElement(locator: Locator, state: 'attached' | 'detached' | 'visible' | 'hidden', timeout = BasePage.maxTimeout): Promise<Locator> {
    await locator.waitFor({ state, timeout });
    return locator;
  }

  locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  // ---------- Frame Access Helpers ----------
  /**
   * Get the main frame of the page.
   * @returns {FrameLocator} The main frame locator.
   */

  getMainFrame(): FrameLocator {
    return this.page.frameLocator("frame[name='MainFrame']");
  }
  /**
   * Get the top frame of the page.
   * @returns {FrameLocator} The top frame locator.
   */

  getTopFrame(): FrameLocator {
    return this.getMainFrame().frameLocator("frame[name='TopFrame']");
  }
  /**
   * Get the left frame of the page.
   * @returns {FrameLocator} The left frame locator.
   */

  getLeftFrame(): FrameLocator {
    return this.getMainFrame().frameLocator("frame[name='LeftFrame']");
  }
  /**
   * Get the right frame of the page.
   * @returns {FrameLocator} The right frame locator.
   */

  getRightFrame(): FrameLocator {
    return this.getMainFrame().frameLocator("frame[name='RightFrame']");
  }
  /**
   * Get the bottom frame of the page.
   * @returns {FrameLocator} The bottom frame locator.
   */

  getBottomFrame(): FrameLocator {
    return this.getMainFrame().frameLocator("frame[name='BottomFrame']");
  }
  /**
   * Get the inner iframe in the right frame.
   * @param {string} id - The ID of the iframe to locate.
   * @returns {FrameLocator} The inner iframe locator.
   */

  getInnerIframeInRightFrame(id = 'ifrMaster'): FrameLocator {
    return this.getRightFrame().frameLocator(`iframe[id='${id}']`);
  }


 
}
