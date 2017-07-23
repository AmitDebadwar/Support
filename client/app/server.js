var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static('../app'));
app.use(express.static(path.join(__dirname+'/node_modules')));
app.use(express.static(path.join(__dirname+'/src/controllers')));




app.get('/',function(req,res){
  res.sendFile('index.html',{"root": __dirname});
});

app.listen(3000);



console.log("Running at Port 3000");
console.log(__dirname);