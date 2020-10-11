const app = require('./app');
const config = require('./utils/config');

// Start the server at specified port
app.listen(config.PORT, () => {
  console.log('Server is running on', config.PORT);
});
