const got = require('got');
const Quote = require('../models/quotes');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const scrapper = async () => {
  // delete all the quotes from DB, otherwise it will clutter all the quotes into it everytime we run app.
  await Quote.deleteMany({});
  // an array to store all the objects
  const quotes = [];
  // running a loop to scrape all quotes from all the pages
  for (let i = 1; i <= 10; i++) {
    const url = `http://quotes.toscrape.com/page/${i}/`;
    const response = await got(url);
    const dom = new JSDOM(response.body);
    const nodeList = dom.window.document.querySelectorAll('span[class="text"]');
    for (const node of nodeList) {
      // removing " from the string
      const text = node.innerHTML.substring(1, node.innerHTML.length - 1);
      quotes.push({ text });
    }
  }
  //inserting all the quotes in db with single command
  await Quote.insertMany(quotes);
};

module.exports = scrapper;
