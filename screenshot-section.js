const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  const section = await page.$('.wcu-section');
  if (!section) {
    console.log('wcu-section NOT FOUND');
    await browser.close();
    process.exit(1);
  }

  // Scroll into view and wait for whileInView animations to complete
  await section.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  const box = await section.boundingBox();
  console.log('Section box:', JSON.stringify(box));
  await section.screenshot({ path: '/tmp/wcu-section-desktop.png' });

  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  const sectionMobile = await page.$('.wcu-section');
  if (sectionMobile) {
    await sectionMobile.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);
    await sectionMobile.screenshot({ path: '/tmp/wcu-section-mobile.png' });
    console.log('Mobile screenshot taken');
  }
  
  await browser.close();
  console.log('Done');
})();
