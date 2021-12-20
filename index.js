const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const articles = require('./routes/article');
const {APP_PORT, allowedOrigins} = require('./config');

app.use(cors({
  origin(origin, callback) {
    const even = allowedOrigins.some(element => element === origin);
    callback(null, even);
  },
  preflightContinue: true,
  optionsSuccessStatus: 200,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', articles)

app.get('*', (req, res) => {
  res.send("<h1>Hello world!</h1>")
});

app.listen(APP_PORT, (req, res) => {
  console.log(`server is working on port: localhost://${APP_PORT}...`)
});
