// Use strict mode
'use strict';

// Load usefull expressjs and nodejs objects / modules
let express = require('express');
let path = require('path');

let app = express();

// Minimum routing: serve static content from the html directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../__common-logos__')));
app.set('views', path.join(__dirname, '/views'));

app.set('view engine', 'ejs');


app.use('/story', (req, res, next) => res.render('story'));


app.use('/', (req, res, next) => res.render('cover'));

// You can then add whatever routing code you need

// This module is exported and served by the main server.js located
// at the root of this set of projects. You can access it by lanching the main
// server and visiting http(s)://127.0.0.1:8080/name_of_you_project/ (if on a local server)
// or more generally: http(s)://server_name:port/name_of_you_project/
module.exports = app;
