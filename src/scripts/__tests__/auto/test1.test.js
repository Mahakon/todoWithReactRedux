import faker from "faker";
import puppeteer from "puppeteer";

//path to index.html
const APP =
    "file:///home/maha/WebstormProjects/reactTodosNewVersion/public/index.html";

let page;
let browser;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false
    });
    page = await browser.newPage();
    await page.goto(APP);

    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio
        };
    });
});
afterAll(() => {
    browser.close();
});

describe("Todos React-Redux", () => {

    it("just test", async () => {
        await page.body;
        await page.click(".todos-add_new-item");
        await page.type(".todos-add_new-item", faker.random.word());
        await page.waitFor(800);
        await page.keyboard.press('Enter');
        await page.waitFor(800);
        await page.click(".todos-add_new-item");
        await page.type(".todos-add_new-item", faker.random.word());
        await page.waitFor(800);
        await page.keyboard.press('Enter');
        await page.click(".todos-add_new-item");
        await page.type(".todos-add_new-item", faker.random.word());
        await page.waitFor(800);
        await page.keyboard.press('Enter');
        await page.waitFor(800);
    }, 16000);
});
