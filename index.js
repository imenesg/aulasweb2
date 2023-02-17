const express = require("express")
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()

app.post('/getHTML', urlencodedParser, (req, res) =>{
    // const {nome} = req.body

   res.send(req.body.nome)
})

app.listen(8080, ()=>{
    console.log('rodando...');
})