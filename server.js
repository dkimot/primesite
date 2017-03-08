'use-strict'

const express = require('express');
const bodyParser = require('body-parser');

// Create new server
const server = express();

// Configure server
server.use(bodyParser.json());
server.set('views', './views');
server.set('view engine', 'pug');

server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

server.post('/contact/sendmail', (req, res) => {
  // Send email
});

server.get('/build/*', (req, res) => {
  console.log('GET build')
});
server.get('/', (req, res) => {
  res.render('index')
});

server.listen(3030, () => {
  console.log('Server listening on %s', 3030);
});
