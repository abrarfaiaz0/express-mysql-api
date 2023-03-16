const express = require('express')
const app = express()

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
