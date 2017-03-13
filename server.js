'use-strict'

const express    = require('express');
const bodyParser = require('body-parser');
const favicon    = require('serve-favicon');
const path       = require('path');

const PORT = process.env.PORT || 3030;

// Create new server
const server = express();

// Configure server
server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
server.use(bodyParser.json());
server.set('views', './views');
server.set('view engine', 'pug');

server.use('/build', express.static(path.join(__dirname, 'public', 'build')));
server.use('/img', express.static(path.join(__dirname, 'public', 'img')));
server.use('/fonts', express.static(path.join(__dirname, 'public', 'fonts')));

server.post('/contact/sendmail', (req, res) => {
  // Send email
});
server.get('/products/**/*', (req, res) => {
  res.redirect('http://shop.primesystemsinc.com');
});

server.get('/*', (req, res, next) => {
  let url = req.url.slice(1);
  if (url === '/') {
    res.render('index');
    return;
  }

  if (url.charAt(url.length - 1) === '/') {
    res.render(url + 'index');
    return;
  }

  res.render(url);
});

/*
server.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

server.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
})
*/

server.listen(PORT, (err) => {
  if (err)
    console.error(err)
  else
    console.log('Server listening on %s', PORT);
});

if (process.env.environment === 'PRODUCTION') {
  process.on('uncaughtException', (err) => {
    console.err(JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner'], 2)));
  });
}
