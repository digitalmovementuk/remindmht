import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const viewports = [
  { name: 'iphone-se', width: 375, height: 667 },
  { name: 'iphone-14', width: 390, height: 844 },
  { name: 'ipad', width: 768, height: 1024 },
  { name: 'laptop', width: 1280, height: 900 },
  { name: 'desktop', width: 1440, height: 960 },
  { name: 'large-desktop', width: 1920, height: 1080 },
];

for (const viewport of viewports) {
  test(`renders and screenshots ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Your Mind/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Therapy is not one size fits all/i })).toBeVisible();
    await page.screenshot({ path: `tests/screenshots/${viewport.name}.png`, fullPage: true });
  });
}

test('has no detectable axe violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
