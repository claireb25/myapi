var dbconnect = require("./../dbconnect.js");



var appRouter = function (app,tabledata) {
  app.get("/", function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(tabledata);
  })
  app.get("/presentation", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(tabledata.presentation);
  })
  app.get("/experiences", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(tabledata.experiences);
  })
  app.get("/formations", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(tabledata.formations);
  })
  app.get("/competences", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(tabledata.competences);
  })
  app.get("/projets", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(tabledata.projets);
  })
  app.get("/projet", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(tabledata.projet);
  })
};

module.exports = appRouter;