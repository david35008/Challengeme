const puppeteer = require('puppeteer');
const nock = require('nock');
const useNock = require('nock-puppeteer');
const cookies = require('../../mocks/cookies');
const homePageMock = require('../../mocks/home_page');

jest.setTimeout(15000);
describe('All the routes are working together', () => {
  let page;
  let browser;
  beforeEach(async () => {
    // open a chromium browser
    browser = await puppeteer.launch({
      // slowMo: 45,
      // headless: false
    });
    // open a new page within that browser
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.setCookie(...cookies);
    const screenSize = {
      width: 1280,
      height: 768,
    };
    await page.setViewport(screenSize);
    useNock(page, ['http://localhost:3000/api/v1']);
  });
  afterAll(async () => {
    // close the chromium after each test
    await browser.close();
  });

  test('Insight component can be reached by click on the insight icon, and display the charts', async () => {
    await nock('http://localhost:3000/', { allowUnmocked: true })
      .get('/api/v1/auth/validate-token')
      // .query(() => true)
      .reply(200, { valid: true });
    const getAllChallenges = await nock('http://localhost:3000/', {
      allowUnmocked: true,
    })
      .get('/api/v1/challenges')
      // .query(() => true)
      .reply(200, homePageMock);
    await page.goto('http://localhost:3000');
    await page.waitForSelector('.header-link-title');
    const pageTitle = await page.$('.header-link-title');
    const pageTitleValue = await (
      await pageTitle.getProperty('innerText')
    ).jsonValue();
    expect(pageTitleValue).toBe('ChallengeMe');
    const elements = await page.$$('.challenge-card');
    expect(elements).toHaveLength(homePageMock.length);
    expect(getAllChallenges.isDone()).toBe(true);
  });
});
