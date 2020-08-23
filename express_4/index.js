const Joi = require("joi");
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require("express");
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

app.set('view engine', 'pug');
app.set('views', './views'); //route of pug


app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: true })); // key=value&key=value
app.use(express.static('public'));
app.use(helmet());

app.use('/api/courses', courses);
app.use('/', home);


//configuration
console.log(`Application Name:` + config.get('name'));
console.log(`Mail Server:` + config.get('mail.host'));

console.log(`Mail Password:` + config.get('mail.password'));


//text which environment is it which environment
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));

// PORT: Environment Variables
// export to set the Environment Variables
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening o port ${port}`));
}