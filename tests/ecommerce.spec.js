const { chromium } = require('playwright');

(async () => {
  
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  
  await page.goto('https://www.amazon.in');
  await page.fill('input[name="field-keywords"]', 'Titan watch');
  await page.click('input[type="submit"]');

  
  await page.waitForSelector('.s-main-slot');
  await browser.close();
})();
