var express = require('express');
var path = require("path");
var ejs = require("ejs");
var bodyParser = require('body-parser');
var app = new express();

// view engine
app.set('views', path.join(__dirname, 'static'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static(__dirname));
app.set('port', 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function(req, res, next) {
    console.log(req.path, req.method, req.params, req.body, req.query);
    //res.end('123456');
    next();
});
app.use('/login', require('./routers/login'));

module.exports = app;