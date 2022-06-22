var express = require("express");
var app = express()
var bp = require("body-parser")

var urlc = bp.urlencoded({extended:false})
app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.get("/processar_get", function(req,res){
    res.end("bem vindo(a):"+ req.query.nome +"Idade: " + req.query.idade)

})

app.post("/processar_post", urlc, function(req,res){
res.end("bem vindo(a): "+ req.body.login +" senha: " + req.body.senha)

})
app.listen(8080)
