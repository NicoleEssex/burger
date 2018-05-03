//DEPENDENCIES
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// ROUTING FUNCTIONS
router.get("/", function(req,res){
    res.redirect("/burgers");
});
router.get("/burgers", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {burgers: data};
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/burgers/create", function(req, res) {
    burger.create(["burger", "devoured"], [req.body.burger, req.body.devoured], function() {
      res.redirect('/burgers');
    });
  });

  router.put("/burgers/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({devoured: req.body.devoured}, condition, function() {
      res.redirect("/burgers");
    });
  });
  
// Export routes for server.js to use.
module.exports = router;

  
  