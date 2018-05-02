//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodoOverride = require("method-override");
var mySql= require("mySql");


//START SERVER
var app = express();

//EXPRESS ROUTE TO DISPLAY HANDLEBARS INDEX + MAIN
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.get('/',function(req,res){
    res.render('index');
})

//Serve static content for the app from the "public" directory in the application.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}))

//Override with POST having ?_method=DELETE
app.use(methodoOverride('_method'));



//MySql CONNECTION via ORM CONFIGURATION
var orm = require("./config/orm"); 

//EXPRESS ROUTES via BURGER_CONTROLLERS
var routes = require('./controllers/burger_controllers');
app.use('/', routes);

//PORT CONNECTION
var PORT = process.env.PORT || 8080;

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});