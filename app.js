const express = require('express')
const app = express()

var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'abcd'
});
 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

app.listen('3000')

app.get('/',(req,res)=>{
    res.send("Hello here")
})

app.get('/about', (req, res) => {
    res.send('about')
  })

app.get('/nothing',(req,res)=>{
    res.send('nothing to see')
})

app.use((req,res)=>{
    res.redirect('/nothing');
})
