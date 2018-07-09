var express = require("express");
var bodyParser = require("body-parser");

var tabledata = {};

var dbconnect = require("./dbconnect.js");
var routes = require("./routes/routes.js");
var app = express();
var model = require('./models/model.js');

model.presentation(tabledata);
model.experiences(tabledata);
model.formations(tabledata);
model.competences(tabledata);
model.projets(tabledata);
model.projet(tabledata);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app,tabledata);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});





