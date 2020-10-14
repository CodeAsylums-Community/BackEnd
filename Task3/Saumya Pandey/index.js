const app = require('./app');
const scrapper = require('./utils/scrape');
const config = require('./utils/config');

app.listen(config.PORT, () => {
  console.log('Server is running on', config.PORT);
});

// scrapes all the quotes from the website and adds it to the DB
scrapper();
