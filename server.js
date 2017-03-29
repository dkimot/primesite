const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');

const PORT = process.env.PORT || 3030;

const site = express();

site.use(express.static('client/dist'));

site.listen(PORT, () => {
  console.log('Site is listening on %s', PORT);
});
