var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'abcd',
  database : 'sakila'
});




module.exports = connection;