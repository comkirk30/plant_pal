const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
//const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// set up Handlebars.js as app's template engine of choice
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({ helpers });

<<<<<<< HEAD
//sets up an Express.js session and connects the session to our Sequelize Database
// const session = require('express-session');
=======

// sets up an Express.js session and connects the session to our Sequelize Database
const session = require('express-session');
>>>>>>> c7205d7a276c0a88b4bf9bf0796d786c20d8388b

// const SequelizeStore = require('connect-session-sequelize')(session.Store);

<<<<<<< HEAD
// const sess = {
//   secret: process.env.SESS_SECRET,
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));
=======
const sess = {
  secret: 'Super secret secret',
  cookie: { maxAge: 600000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize
  })
};


app.use(session(sess));
>>>>>>> c7205d7a276c0a88b4bf9bf0796d786c20d8388b

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening - Server up on http://localhost:${PORT}`));
});