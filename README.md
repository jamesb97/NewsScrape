# News Scrape Application

An intuitive way of scraping the latest headlines from YCombinator and writing the results to a Google Spreadsheet with Pupeteer(Headless Chrome Browser). To get started clone this repository:

`
git clone https://github.com/jamesb97/NewsScrape.git
`

Install the necessary dependencies

`
npm install --save
`

Head on over to [Sheetsu](https://sheetsu.com) and set up an account to connect to your Google Sheets by following the instructions. After obtaining the spreadsheet url, paste it inside the index.js file. To test the application run

`
npm start
`

Once completed you should see the results in Google Sheets. Learn more about [Pupeteer](https://github.com/puppeteer/puppeteer) and its web scraping capabilities.