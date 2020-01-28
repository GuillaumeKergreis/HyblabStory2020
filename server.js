'use strict';

// general routing framework
let express = require('express');
//var basicAuth = require('basic-auth-connect');
let app = express();

// password protection
//app.use(basicAuth('story2020', 'ilovestory'));

// declare the list of sub apps
let app_names = ['sciencescom'];

let story2020_names = [];

app_names.push.apply(app_names, story2020_names);

let sub_apps = [];

// create sub apps
// and register sub-apps
app_names.forEach(function (element, index, array) {
    console.log('Registering: ' + element);
    sub_apps[element] = require('./' + element + '/server');
    app.use('/' + element, sub_apps[element]);
});

// redirect catch all url to hyblab website
app.use(/\/$/, function (req, res, next) {
    res.redirect('http://www.hyblab.fr/');
});


// launch main server app

//warning: do not change the port, it will be automatically taken from env en dev and prod servers ...
let port = 'PORT' in process.env ? process.env.PORT : 8080;

let server = app.listen(port, function () {

    let host = server.address().address;
    let port = server.address().port;

    console.log('Hyblab routing app listening at http://%s:%s', host, port);

});
