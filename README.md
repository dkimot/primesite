Note: The Gulp Pug renderer does not support directories within directories. The directory structure has to be fairly flat.

This is the new site template for the Kimoto Web Studio.

On the front-end it uses Express, React, Pug, and Foundation.css/Sass.

On the back-end it uses Restify and RethinkDB.

For the more lightweight stuff (static) it uses Pug combined with a Pug Pre-Render Gulp task to get maximum speed.

For the more aggressive stuff (eCommerce, Admin pages, Profile pages, etc.) it uses React.js with Redux.

This is not designed for high scale, rather, it is designed for rapid prototyping. As such, it connects to the local RethinkDB instance by default.

Run this baby on a tiny DO Droplet, EC2 t2-micro/t2-nano, or a small Heroku Dyno. This is not designed for separation of concerns (gasp).

By default it uses Foundation.css which does include jQuery.

The Gulp task `build` compiles Sass, concatenates and minifies CSS, concatenates and minifies JS, and compresses Images.

# File structure:
## client
Contains all files associated with the front end of the site.
###   src
  CSS, SCSS, JS, and Images.
###   views
  Mimics the final web server root directory. Currently cannot have subdirectories within subdirectories.
###   lib
  The React.js Web App(s)

## backend
Contains all files associated with the backend/API and Db.
###   db
  Contains files related to the DB/ORM
###   router
  Contains files that start the backend server and manage the API

Note: The backend is not where React.js magic happens. That's the client. The backend manages two things: the RethinkDB and the API.

# Client Docs
TODO: Client Docs

# Backend Docs
Because the backend uses Restify, the server only serves JSON

# Deploying
To start the production server run: <pre><code>yarn install && yarn add gulp -g</code></pre> then run <pre><code>npm run prod</code></pre>
