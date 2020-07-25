// Set up MySQL connection.
var mysql = require("mysql");

//change connection to include JAWSDB
var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "Adriana01!3",
        database: "burgers_db"
    })
};


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

});

// connection.connect();

// Export connection for our ORM to use.
module.exports = connection;