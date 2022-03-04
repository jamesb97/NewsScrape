const puppeteer = require("puppeteer");
const sheetsu = require("sheetsu");

async function start(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  //await page.screenshot({path: "news.png", fullPage: true});
  const data = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".titlelink")).map(
      (x) => x.textContent
    );
  });

  const data2 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".titlelink")).map((x) =>
      x.getAttribute("href")
    );
  });

  const rows = `title\n ${data}\r\n link\n ${data2}`;
  new sheetsu({
    address: "your sheetsu url here",
  }).update(rows);
  await browser.close();
}

start("https://news.ycombinator.com/");
