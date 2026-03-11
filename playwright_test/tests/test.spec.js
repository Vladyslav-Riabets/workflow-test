import { test, expect } from '@playwright/test';

test('check page title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Example Domain/);
});
