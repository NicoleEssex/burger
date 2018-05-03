//Set up MySQL connection
var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  port: 3306, 
  host: "localhost",
  user: "root",
  password: "test",
  database: "burgers_db"
})
};

//Make connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!" + connection.threadId);
});

//Export connection for ORM to use
module.exports=connection;