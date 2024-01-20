const puppeteer = require('puppeteer');
const nock = require('nock');
const useNock = require('nock-puppeteer');

const baseUrl = 'http://localhost:3000/';

describe('Client Tests', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 30
    });
    page = await browser.newPage();
    useNock(page, [baseUrl]);
  });
  afterAll(() => {
    browser.close();
  });

  test('input validation', async (done) => {
    await page.goto(`${baseUrl}login`);
    await page.waitForSelector('#userNameField', { visible: true });
    const usernameInput = await page.$('#userNameField');
    const passwordInput = await page.$('#passwordField');
    await usernameInput.type('Test1%2');
    await passwordInput.type('Test12345');
    const button = await page.$('#loginButton');
    button.click();
    await timeout(1000);
    const textContent = await page.evaluate(
      () => document.querySelector('.errorInput').textContent,
    );
    expect(textContent).toBe('invalid userName');
    await usernameInput.click({ clickCount: 3 });
    await usernameInput.type('abcdefghjklmnoqrstuvwxyz12345678987654321');
    await passwordInput.click({ clickCount: 3 });
    await passwordInput.type('Test12345');
    button.click();
    await timeout(1000);
    const textContent2 = await page.evaluate(
      () => document.querySelector('.errorInput').textContent,
    );
    expect(textContent2).toBe('userName must be 1-32 characters long');
    await usernameInput.click({ clickCount: 3 });
    await usernameInput.type('Test123');
    await passwordInput.click({ clickCount: 3 });
    await passwordInput.type('Test');
    button.click();
    await timeout(1000);
    const textContent3 = await page.evaluate(
      () => document.querySelector('.errorInput').textContent,
    );
    expect(textContent3).toBe('password must be at least 8 characters long');
    done();
  }, 30000);

  test('login request sent to server and cookies set', async (done) => {
    await page.goto(`${baseUrl}login`);
    const login = await nock(baseUrl, {
      allowUnmocked: true,
    })
      .post('/api/v1/auth/login')
      .reply(200);

    await page.waitForSelector('#userNameField', { visible: true });
    await page.type('#userNameField', 'Test123');
    await page.type('#passwordField', 'Test12345');
    const button = await page.$('#loginButton');
    button.click();
    await timeout(1000);
    expect(login.isDone()).toBe(true);
    expect(page._target._targetInfo.url).toBe(`${baseUrl}`);
    done();
  }, 30000);

  test('move to sign up page', async (done) => {
    await page.goto(`${baseUrl}login`);
    await page.waitForSelector('#signUp', { visible: true });
    const button = await page.$('#signUp');
    button.click();
    await timeout(1000);
    expect(page._target._targetInfo.url).toBe(`${baseUrl}register`);
    done();
  }, 30000);

  test('move to forgot password page', async (done) => {
    await page.goto(`${baseUrl}login`);
    await page.waitForSelector('.forgotLabel', { visible: true });
    const button = await page.$('.forgotLabel');
    button.click();
    await timeout(1000);
    expect(page._target._targetInfo.url).toBe(`${baseUrl}forgot`);
    done();
  }, 30000);
});

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
