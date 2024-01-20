const puppeteer = require('puppeteer');
const nock = require('nock');
const useNock = require('nock-puppeteer');

const baseUrl = 'http://localhost:3000';

let page;
let browser;

describe('Client Tests', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 10
    });
    page = await browser.newPage();
    useNock(page, [baseUrl]);
  });
  afterAll(() => {
    browser.close();
  });
  test('input validation page UserDetails', async (done) => {
    await page.goto(baseUrl);
    const userNameExist = await nock(baseUrl, {
      allowUnmocked: true,
    })
      .post('/api/v1/auth/user-exist')
      .reply(200);

    const userRegister = await nock(baseUrl, {
      allowUnmocked: true,
    })
      .post('/api/v1/auth/register')
      .reply(201);

    await page.click('.makeStyles-registerHomePage-3 .MuiButton-label');
    await page.click('#firstName');
    await page.type('#firstName', 'test1');
    await page.click('#nextButton');
    await page.waitForSelector('.errorInputRegister');
    let linkTexts = await page.$$eval('.errorInputRegister', (elements) => elements.map((item) => item.textContent));
    expect(linkTexts[0]).toBe('First name must contain only letters.');
    await scrollToElement(page, '#firstName');
    await page.click('#firstName');
    await page.evaluate(
      () => (document.getElementById('firstName').value = ''),
    );
    await page.type('#firstName', 'test');
    await page.click('#lastName');
    await page.type('#lastName', 'test2');
    await page.click('#nextButton');
    await page.click('.errorInputRegister');
    await timeout(3000);
    await page.waitForSelector('.errorInputRegister');
    linkTexts2 = await page.$$eval('.errorInputRegister', (elements) => elements.map((item) => item.textContent));
    expect(linkTexts2[0]).toBe('Last name must contain only letters.');
    await page.click('#lastName');
    await page.evaluate(() => (document.getElementById('lastName').value = ''));
    await page.type('#lastName', 'test');
    await page.click('#userName');
    await page.type('#userName', 'usertest%user');
    await page.click('#nextButton');
    await timeout(3000);
    await page.waitForSelector('.errorInputRegister');
    linkTexts3 = await page.$$eval('.errorInputRegister', (elements) => elements.map((item) => item.textContent));
    expect(linkTexts3[0]).toBe(
      'Username must contain only letters and numbers.',
    );
    await page.click('#userName');
    await page.evaluate(() => (document.getElementById('userName').value = ''));
    await page.type('#userName', 'usertest123');
    await page.click('#email');
    await page.type('#email', '1231231');
    await page.click('#nextButton');
    await timeout(3000);
    await page.waitForSelector('.errorInputRegister');
    linkTexts4 = await page.$$eval('.errorInputRegister', (elements) => elements.map((item) => item.textContent));
    expect(linkTexts4[0]).toBe('Email invalid.');
    await page.click('#email');
    await page.evaluate(() => (document.getElementById('email').value = ''));
    await page.type('#email', 'david@gmail.com');
    const button = await page.$('#nextButton');
    button.click();
    await timeout(1000);
    expect(userNameExist.isDone()).toBe(true);
    expect(page._target._targetInfo.url).toBe(`${baseUrl}/register`);
    await page.waitForSelector('#country');
    await page.click('#country');
    await page.type('#country', '4567');
    await page.click('#nextButton');
    await timeout(1000);
    await page.waitForSelector('.errorInputRegister');
    linkTexts = await page.$$eval('.errorInputRegister', (elements) => elements.map((item) => item.textContent));
    expect(linkTexts[0]).toBe('Country must contain only letters');
    await page.click('#country');
    await page.evaluate(() => (document.getElementById('country').value = ''));
    await page.type('#country', 'test');
    await page.click('#country');
    await page.click('#city');
    await page.type('#city', '123');
    await page.click('#nextButton');
    await timeout(1000);
    await page.waitForSelector('.errorInputRegister');
    linkTexts = await page.$$eval('.errorInputRegister', (elements) => elements.map((item) => item.textContent));
    expect(linkTexts[0]).toBe('City must contain only letters');
    await page.click('#city', { clickCount: 2 });
    await page.evaluate(() => (document.getElementById('city').value = ''));
    await page.type('#city', 'ityu');
    await page.click('#birthDate');
    await page.type('#birthDate', '2021-11-30');
    await page.click('#nextButton');
    await timeout(1000);
    await page.waitForSelector('.errorInputRegister');
    linkTexts = await page.$$eval('.errorInputRegister', (elements) => elements.map((item) => item.textContent));
    expect(linkTexts[0]).toBe('Birth date must be in the past.');
    await page.click('#birthDate');
    await page.type('#birthDate', '2020-11-01');
    await page.click('#phoneNumber');
    await page.type('#phoneNumber', 'asdklasmdaskldmaskl');
    await page.click('#nextButton');
    await timeout(1000);
    await page.waitForSelector('.errorInputRegister');
    linkTexts = await page.$$eval('.errorInputRegister', (elements) => elements.map((item) => item.textContent));
    expect(linkTexts[0]).toBe('Invalid phone number');
    await page.click('#phoneNumber');
    await page.evaluate(
      () => (document.getElementById('phoneNumber').value = ''),
    );
    await page.type('#phoneNumber', '0555555555');
    button.click();
    await timeout(1000);
    expect(page._target._targetInfo.url).toBe(`${baseUrl}/register`);
    await page.waitForSelector('#password');
    await page.click('#password');
    await page.type('#password', '123456');
    await page.click('#nextButton');
    await timeout(1000);
    await page.waitForSelector('.errorInputRegister');
    linkTexts = await page.$$eval('.errorInputRegister', (elements) => elements.map((item) => item.textContent));
    expect(linkTexts[0]).toBe('Password needs to be at least 8 characters.');
    await page.click('#password');
    await page.type('#password', '78');
    await page.click('#confirmPassword');
    await page.type('#confirmPassword', '123456');
    await page.click('#nextButton');
    await timeout(1000);
    await page.waitForSelector('.errorInputRegister');
    linkTexts = await page.$$eval('.errorInputRegister', (elements) => elements.map((item) => item.textContent));
    expect(linkTexts[0]).toBe('Passwords must be identical.');
    await page.click('#confirmPassword');
    await page.type('#confirmPassword', '78');
    await page.click('#nextButton');
    await timeout(6000);
    await page.waitForSelector('.errorInputRegister');
    linkTexts = await page.$$eval('.errorInputRegister', (elements) => elements.map((item) => item.textContent));
    // expect(linkTexts[0]).toBe('Security question must be chosen.')
    await page.click('#securityQuestion');
    await page.click("[data-value='Who was your childhood hero?']");
    await page.click('#securityAnswer');
    await page.type('#securityAnswer', '123456');
    await page.click('#nextButton');
    await timeout(6000);
    await page.waitForSelector('.errorInputRegister');
    linkTexts = await page.$$eval('.errorInputRegister', (elements) => elements.map((item) => item.textContent));
    expect(linkTexts[0]).toBe(
      'Security answer should be at least 8 characters.',
    );
    await page.click('#securityAnswer');
    await page.type('#securityAnswer', '78');
    button.click();
    await timeout(6000);
    expect(page._target._targetInfo.url).toBe(`${baseUrl}/register`);
    await page.waitForSelector('#signUpReason');
    await page.click('#nextButton');
    await timeout(6000);
    await page.waitForSelector('.errorInputRegister');
    linkTexts = await page.$$eval('.errorInputRegister', (elements) => elements.map((item) => item.textContent));
    // expect(linkTexts[0]).toBe('Sign up reason must be chosen.')
    await page.click('#signUpReason');
    await page.click("[data-value='Student']");
    await page.click('#github');
    await page.type('#github', '%+121212');
    await page.click('#nextButton');
    await timeout(6000);
    await page.waitForSelector('.errorInputRegister');
    linkTexts = await page.$$eval('.errorInputRegister', (elements) => elements.map((item) => item.textContent));
    expect(linkTexts[0]).toBe('GitHub account is invalid.');
    await page.click('#github');
    await page.evaluate(() => (document.getElementById('github').value = ''));
    await page.type('#github', 'daviddavid');
    await button.click();
    await timeout(6000);
    expect(userRegister.isDone()).toBe(true);
    expect(page._target._targetInfo.url).toBe(`${baseUrl}/register`);
    await page.waitForSelector('.confirmMessage');
    await page.click('#nextButton');
    await timeout(3000);
    expect(page._target._targetInfo.url).toBe(`${baseUrl}/login`);
    await page.waitForSelector('#userNameField');
    done();
  }, 200000);

  // test('input validation page PersonalDetails', async (done) => {
  //     await page.goto(baseUrl);
  //     await page.click(".makeStyles-registerHomePage-3 .MuiButton-label");
  //     await page.click("#firstName");
  //     await page.type("#firstName", 'test');
  //     await page.click("#lastName");
  //     await page.type("#lastName", 'test');
  //     await page.click("#userName");
  //     await page.type("#userName", 'testuser123');
  //     await page.click("#email");
  //     await page.type("#email", 'cyybrp@gmail.com');
  //     await page.click("#nextButton");
  //     await page.waitForSelector("#country");
  //     await page.click("#country");
  //     await page.type("#country", '4567');
  //     await page.click("#nextButton");
  //     await timeout(1000)
  //     await page.waitForSelector(".errorInputRegister");
  //     let linkTexts = await page.$$eval(".errorInputRegister",
  //         elements => elements.map(item => item.textContent))
  //     expect(linkTexts[0]).toBe('Country must contain only letters')
  //     await page.click("#country");
  //     await page.evaluate(() => document.getElementById("country").value = "")
  //     await page.type("#country", 'test');
  //     await page.click("#country");
  //     await page.click("#city");
  //     await page.type("#city", '123');
  //     await page.click("#nextButton");
  //     await timeout(1000)
  //     await page.waitForSelector(".errorInputRegister");
  //     linkTexts = await page.$$eval(".errorInputRegister",
  //         elements => elements.map(item => item.textContent))
  //     expect(linkTexts[0]).toBe('City must contain only letters')
  //     await page.click("#city", { clickCount: 2 });
  //     await page.evaluate(() => document.getElementById("city").value = "")
  //     await page.type("#city", 'ityu');
  //     await page.click("#birthDate");
  //     await page.type("#birthDate", '2021-11-30');
  //     await page.click("#nextButton");
  //     await timeout(1000)
  //     await page.waitForSelector(".errorInputRegister");
  //     linkTexts = await page.$$eval(".errorInputRegister",
  //         elements => elements.map(item => item.textContent))
  //     expect(linkTexts[0]).toBe('Birth date must be in the past.')
  //     await page.click("#birthDate");
  //     await page.type("#birthDate", '2020-11-01');
  //     await page.click("#phoneNumber");
  //     await page.type("#phoneNumber", 'asdklasmdaskldmaskl');
  //     await page.click("#nextButton");
  //     await timeout(1000)
  //     await page.waitForSelector(".errorInputRegister");
  //     linkTexts = await page.$$eval(".errorInputRegister",
  //         elements => elements.map(item => item.textContent))
  //     expect(linkTexts[0]).toBe('Invalid phone number')
  //     await page.click("#phoneNumber");
  //     await page.evaluate(() => document.getElementById("phoneNumber").value = "")
  //     await page.type("#phoneNumber", '0555555555');
  //     const button = await page.$("#nextButton");
  //     button.click();
  //     await timeout(1000);
  //     expect(page._target._targetInfo.url).toBe(baseUrl + '/register');
  //     await page.waitForSelector("#password");
  //     done()
  // }, 20000)

  // test('input validation page Security', async (done) => {
  //     await page.goto(baseUrl);
  //     await page.click(".makeStyles-registerHomePage-3 .MuiButton-label");
  //     await page.click("#firstName");
  //     await page.type("#firstName", 'david');
  //     await page.click("#lastName");
  //     await page.type("#lastName", 'gever');
  //     await page.click("#userName");
  //     await page.type("#userName", 'davidGever');
  //     await page.click("#email");
  //     await page.type("#email", 'cyybrp@gmail.com');
  //     await page.click("#nextButton");
  //     await page.waitForSelector("#country");
  //     await page.click("#country");
  //     await page.type("#country", 'tyty');
  //     await page.click("#city");
  //     await page.type("#city", 'ytyt');
  //     await page.click("#birthDate");
  //     await page.type("#birthDate", '2020-11-01');
  //     await page.click("#phoneNumber");
  //     await page.type("#phoneNumber", '0543333344');
  //     await page.click("#nextButton");
  //     await page.waitForSelector("#password");
  //     await page.click("#password");
  //     await page.type("#password", '123456');
  //     await page.click("#nextButton");
  //     await timeout(1000)
  //     await page.waitForSelector(".errorInputRegister");
  //     let linkTexts = await page.$$eval(".errorInputRegister",
  //         elements => elements.map(item => item.textContent))
  //     expect(linkTexts[0]).toBe('Password needs to be at least 8 characters.')
  //     await page.click("#password");
  //     await page.type("#password", '78');
  //     await page.click("#confirmPassword");
  //     await page.type("#confirmPassword", '123456');
  //     await page.click("#nextButton");
  //     await timeout(1000)
  //     await page.waitForSelector(".errorInputRegister");
  //     linkTexts = await page.$$eval(".errorInputRegister",
  //         elements => elements.map(item => item.textContent))
  //     expect(linkTexts[0]).toBe('Passwords must be identical.')
  //     await page.click("#confirmPassword");
  //     await page.type("#confirmPassword", '78');
  //     await page.click("#nextButton");
  //     await timeout(1000)
  //     await page.waitForSelector(".errorInputRegister");
  //     linkTexts = await page.$$eval(".errorInputRegister",
  //         elements => elements.map(item => item.textContent))
  //     expect(linkTexts[0]).toBe('Security question must be chosen.')
  //     await page.click("#securityQuestion");
  //     await page.click("[data-value='Who was your childhood hero?']");
  //     await page.click("#securityAnswer");
  //     await page.type("#securityAnswer", '123456');
  //     await page.click("#nextButton");
  //     await timeout(3000)
  //     await page.waitForSelector(".errorInputRegister");
  //     linkTexts = await page.$$eval(".errorInputRegister",
  //         elements => elements.map(item => item.textContent))
  //     expect(linkTexts[0]).toBe('Security answer should be at least 8 characters.')
  //     await page.click("#securityAnswer");
  //     await page.type("#securityAnswer", '78');
  //     const button = await page.$("#nextButton");
  //     button.click();
  //     await timeout(1000);
  //     expect(page._target._targetInfo.url).toBe(baseUrl + '/register');
  //     await page.waitForSelector("#signUpReason");
  //     done()
  // }, 20000)

  // test('input validation page Extras', async (done) => {
  //     await page.goto(baseUrl);
  //     const userRegister = await nock(baseUrl, {
  //         allowUnmocked: true,
  //     })
  //         .post("/api/v1/auth/register")
  //         .reply(201);

  //     await page.click(".makeStyles-registerHomePage-3");
  //     await page.click("#firstName");
  //     await page.type("#firstName", 'david');
  //     await page.click("#lastName");
  //     await page.type("#lastName", 'davids');
  //     await page.click("#userName");
  //     await page.type("#userName", 'ddvaidd');
  //     await page.click("#email");
  //     await page.type("#email", 'cyybrp@gmail.com');
  //     await page.click("#nextButton");
  //     await page.waitForSelector("#country");
  //     await page.click("#country");
  //     await page.type("#country", 'rtrtr');
  //     await page.click("#city");
  //     await page.type("#city", 'trtrtr');
  //     await page.click("#birthDate");
  //     await page.type("#birthDate", '2020-11-01');
  //     await page.click("#phoneNumber");
  //     await page.type("#phoneNumber", '0541112233');
  //     await page.click("#nextButton");
  //     await page.waitForSelector("#password");
  //     await page.click("#password");
  //     await page.type("#password", '12345678');
  //     await page.click("#confirmPassword");
  //     await page.type("#confirmPassword", '12345678');
  //     await page.click("#securityQuestion");
  //     await page.click("[data-value='Who was your childhood hero?']");
  //     await page.click("#securityAnswer");
  //     await page.type("#securityAnswer", 'rtrtrtrtrtrt');
  //     await page.click("#nextButton");
  //     await page.waitForSelector("#signUpReason");
  //     await page.click("#nextButton");
  //     await timeout(1000)
  //     await page.waitForSelector(".errorInputRegister");
  //     linkTexts = await page.$$eval(".errorInputRegister",
  //         elements => elements.map(item => item.textContent))
  //     expect(linkTexts[0]).toBe('Sign up reason must be chosen.')
  //     await page.click("#signUpReason");
  //     await page.click("[data-value='Student']");
  //     await page.click("#github");
  //     await page.type("#github", '%+121212');
  //     await page.click("#nextButton");
  //     await timeout(3000)
  //     await page.waitForSelector(".errorInputRegister");
  //     linkTexts = await page.$$eval(".errorInputRegister",
  //         elements => elements.map(item => item.textContent))
  //     expect(linkTexts[0]).toBe('GitHub account is invalid.')
  //     await page.click("#github");
  //     await page.evaluate(() => document.getElementById("github").value = "")
  //     await page.type("#github", 'daviddavid');
  //     const button = await page.$("#nextButton");
  //     await button.click();
  //     await timeout(1000);
  //     expect(userRegister.isDone()).toBe(true);
  //     expect(page._target._targetInfo.url).toBe(baseUrl + '/register');
  //     await page.waitForSelector(".confirmMessage");
  //     done()
  // }, 200000)

  // test('input validation page Confirm', async (done) => {
  //     await page.goto(baseUrl);
  //     const userRegister = await nock(baseUrl, {
  //         allowUnmocked: true,
  //     })
  //         .post("/api/v1/auth/register")
  //         .reply(201);
  //     await page.click(".makeStyles-registerHomePage-3 .MuiButton-label");
  //     await page.click("#firstName");
  //     await page.type("#firstName", 'rtrtrt');
  //     await page.click("#lastName");
  //     await page.type("#lastName", 'rtrtrtrt');
  //     await page.click("#userName");
  //     await page.type("#userName", 'trtrtrtrtr');
  //     await page.click("#email");
  //     await page.type("#email", 'suvelocity@gmail.com');
  //     await page.click("#nextButton");
  //     await page.waitForSelector("#country");
  //     await page.click("#country");
  //     await page.type("#country", 'trtrtrtr');
  //     await page.click("#city");
  //     await page.type("#city", 'rtrtrtrt');
  //     await page.click("#birthDate");
  //     await page.type("#birthDate", '2020-11-01');
  //     await page.click("#phoneNumber");
  //     await page.type("#phoneNumber", '0541112233');
  //     await page.click("#nextButton");
  //     await page.waitForSelector("#password");
  //     await page.click("#password");
  //     await page.type("#password", '12345678');
  //     await page.click("#confirmPassword");
  //     await page.type("#confirmPassword", '12345678');
  //     await page.click("#securityQuestion");
  //     await page.click("[data-value='Who was your childhood hero?']");
  //     await page.click("#securityAnswer");
  //     await page.type("#securityAnswer", 'yosiyosi');
  //     await page.click("#nextButton");
  //     await page.waitForSelector("#signUpReason");
  //     await page.click("#signUpReason");
  //     await page.click("[data-value='Student']");
  //     await page.click("#github");
  //     await page.type("#github", 'yosiyosi');
  //     await page.click("#nextButton");
  //     await timeout(3000)
  //     await page.waitForSelector(".confirmMessage");
  //     const button = await page.$("#nextButton");
  //     await button.click();
  //     await timeout(1000);
  //     expect(page._target._targetInfo.url).toBe(baseUrl + '/login');
  //     await page.waitForSelector("#userNameField");
  //     done()
  // }, 50000)
}, 200000);

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// move to utils.js

async function scrollToElement(page, selector) {
  await page.evaluate((selector) => {
    const element = document.querySelector(selector);
    element.scrollIntoView({
      block: 'center',
      inline: 'nearest',
      behavior: 'instant',
    });
  }, selector);
}
