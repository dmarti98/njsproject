//NOTE: This homework was heavily based on Prof. Auman's work
var config = require('../config.json');
var superagent = require('superagent');


module.exports = function(app) {

// Makes a request to tvmazeapi given the name of the show
  app.get("/search/shows", function(req,res){
    superagent
      .get(config.tvMaze.url + "/search/shows")
      .query({q: req.query.name})
      .end(function(err,result){
        res.json(result.body);

      });

  });
 };