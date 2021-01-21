var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors())
app.options('*', cors())


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public'));
app.use(cors());

consign({cwd: 'src'})
    .include('models')
    .then('controllers')
    .then('routes')
    .then('services')
    .into(app);

module.exports = app;
