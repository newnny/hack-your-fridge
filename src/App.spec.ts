import { test, expect, type Page } from '@playwright/test';

test.describe("Main Page", ()=> {
  test("Should correct metadata and elements", async({page})=> {
    await page.goto("")

    await expect(page).toHaveTitle("HAYFRIE: HAck Your FRIdgE")
  })
})