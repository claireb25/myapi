var dbconnect = require("./../dbconnect.js");


var appRouter = function (app,tabledata, id) {

  // app.param('id', function (req, res, next, id) {
  //   console.log('CALLED ONLY ONCE');
  //   next();
  // });

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
  app.get("/projets/:id", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    tabledata.projets.forEach(function(element) {
      if(element.id == req.params.id){
        console.log(element);
      elem = element;
      return;
      }
    })
    res.json(elem);
  })
};

module.exports = appRouter;