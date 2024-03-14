import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://web.telegram.org/a/');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Log in by phone Number' }).click();
  await page.getByLabel('Your phone number').click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Your phone number').fill('+595985600811');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(10000);
  await page.getByLabel('Code').fill('');
  await page.getByRole('button', { name: 'LIFE | Жизнь в АРГЕНТИНЕ LIFE' }).click();
  await page.locator('#MiddleColumn').getByRole('button', { name: 'LIFE | Жизнь в АРГЕНТИНЕ' }).click();
  await page.getByRole('button', { name: 'Marina Yakovleva', exact: true }).click();
  await page.pause()
});