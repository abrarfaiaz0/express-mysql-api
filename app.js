const express = require('express')
const app = express()
const db = require('./database.js')

app.listen('3000')

app.get('/',(req,res)=>{
    res.send("Hello here")
})

app.get('/about', (req, res) => {
    var sql='SELECT * FROM actor';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
        res.send(data)
    })
    
})

app.get('/nothing',(req,res)=>{
    res.send('nothing to see')
})

app.use((req,res)=>{
    res.redirect('/nothing');
})
