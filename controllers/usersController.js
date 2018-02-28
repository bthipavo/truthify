// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
// Requiring our models
var db = require("../models");
var request = require("request");
// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/users/:country", function(req, res) {
    var country = req.params.country;
    var apiKey = "353a8fddcaba4e7dafde4210fc1dc13c";
    request("https://usersapi.org/v2/top-headlines&country="+ country + "&apiKey=" + apiKey, function(error, response, body) {
      res.json(JSON.parse(body));
    })
  });

  // GET route for getting all of the users
  app.get("/api/users", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.user
    db.Users.findAll({
      where: query,
      include: [db.user]
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Get rotue for retrieving a single users
  app.get("/api/users/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.user
    db.Users.findOne({
      where: {
        id: req.params.id
      },
      include: [db.user]
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Post route for saving a new users
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // DELETE route for deleting users
  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  
  // PUT route for updating users
  app.put("/api/users", function(req, res) {
    db.Users.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbUsers) {
        res.json(dbUsers);
      });
  });
};