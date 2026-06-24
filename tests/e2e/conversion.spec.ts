import { test, expect } from '@playwright/test';
import { waitReady, convert } from './_helpers';

test.describe('ZIP listing', () => {
  test('lists a zip in the browser with no upload', async ({ page }) => {
    const external: string[] = [];
    page.on('request', (req) => {
      const u = req.url();
      if (!u.startsWith('http://localhost:4321') && !u.startsWith('data:') && !u.startsWith('blob:')) {
        external.push(u);
      }
    });
    await page.goto('/zip-viewer/');
    await waitReady(page);
    await convert(page);

    const table = page.locator('[data-testid="entry-table"]');
    await expect(table).toContainText('readme.txt');
    await expect(table.locator('> div')).toHaveCount(2);

    expect(external, `unexpected cross-origin requests: ${external.join(', ')}`).toHaveLength(0);
  });
});
