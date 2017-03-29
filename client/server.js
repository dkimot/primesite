const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const pug        = require('pug');

const PORT = process.env.PORT || 3030;

const site = express();
site.set('view engine', 'pug');

// Products Endpoint
site.use('/products/:category?*/:slug?*', express.static('client/lib/static'));

site.use(express.static('client/dist'));

site.listen(PORT, () => {
  console.log('Site is listening on %s', PORT);
});
