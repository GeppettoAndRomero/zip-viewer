import { type Page } from '@playwright/test';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const ZIP_B64 = readFileSync(
  fileURLToPath(new URL('../fixtures/zip/sample.zip', import.meta.url))
).toString('base64');

export async function waitReady(page: Page) {
  await page.waitForFunction(() => (window as Record<string, unknown>).__toolReady === true);
}

/** zip-viewer's primary action: drop a .zip and wait for the entry list to render. */
export async function convert(page: Page): Promise<void> {
  await page.evaluate((b64) => {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    window.dispatchEvent(
      new CustomEvent('filesDropped', {
        detail: [new File([bytes], 'sample.zip', { type: 'application/zip' })],
      })
    );
  }, ZIP_B64);
  await page.locator('[data-testid="entry-table"]').waitFor({ state: 'visible', timeout: 10_000 });
}
