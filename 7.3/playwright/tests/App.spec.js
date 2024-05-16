const { test, expect } = require("@playwright/test");
const dataValue = require("/home/ubuntu20-user/JavaScript/Play/Playwright/7.3/playwright/user");

test("success", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");

  await page.fill('[placeholder = "Email"]', dataValue.login);
  await page.fill('[placeholder = "Пароль"]', dataValue.pass);

  await page.click('[data-testid="login-submit-btn"]');
  await page.waitForTimeout(5000);
  const title = await page.title();
  expect(title).toBe("Моё обучение");
});

test("notSuccess", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");

  await page.fill('[placeholder = "Email"]', "email@mail.ru");
  await page.fill('[placeholder = "Пароль"]', "qwerty1234");

  await page.click('[data-testid="login-submit-btn"]');
  await expect(page.locator("[data-testid=login-error-hint]")).toBeVisible();
});
