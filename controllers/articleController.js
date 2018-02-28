// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
// Requiring our models
var db = require("../models/articles.js");
var request = require("request");
// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index");
});

  app.get("/api/articles/:country", function(req, res) {
    var country = req.params.country;
    var apiKey = "353a8fddcaba4e7dafde4210fc1dc13c";
    request("https://newsapi.org/v2/top-headlines&country=us&apiKey=" + apiKey, function(error, response, body) {
      res.json(JSON.parse(body));
    })
  });

  // GET route for getting all of the Article
  app.get("/api/article", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.user
    db.Article.findAll({
      where: query,
      include: [db.user]
    }).then(function(dbArticle) {
      res.json(dbArticle);
    });
  });

  // Get route for retrieving a single Article
  app.get("/api/article/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.user
    db.Article.findOne({
      where: {
        id: req.params.id
      },
      include: [db.user]
    }).then(function(dbArticle) {
      res.json(dbArticle);
    });
  });

  // Post route for saving a new Article
  app.post("api/article", function(req, res) {
    db.Article.create(req.body).then(function(dbArticle) {
      res.json(dbArticle);
    });
  });

  // DELETE route for deleting Article
  app.delete("/api/article/:id", function(req, res) {
    db.Article.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbArticle) {
      res.json(dbArticle);
    });
  });
  
  // PUT route for updating Article
  app.put("/api/article", function(req, res) {
    db.Article.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbArticle) {
        res.json(dbArticle);
      });
  });
};