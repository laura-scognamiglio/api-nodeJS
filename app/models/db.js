const mysql = require("mysql2");
// const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection(  
{
  host: "localhost",
  user: "root",
  password: "root",
  database: "api-nodejs",
  port: 8889
});

connection.connect(error => {
    if(error){
      throw error;
    }else{
      console.log("Successfully connected to the database.");
    }
    
  });
  
  module.exports = connection;