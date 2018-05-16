var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "electron_test"
  });
class dbContext { 
     constructor(){
         this.dbConnection = connection;
     }
    connect(){
        // this.dbConnection = mysql.createConnection({
        //     host: "localhost",
        //     user: "root",
        //     password: "",
        //     database: "nextgen_edunext"
        //   });
        this.dbConnection.connect(function (err) {
            if (err) throw err;
                console.log("Database Connected!");
        });
    }
    disconnect(){
        this.dbConnection.end(function(err) {
            console.log("Connect close successfully.");
          });
        
    }
}

module.exports = dbContext;