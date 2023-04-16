const express = require("express");
const bodyParser = require("body-parser");
const request = require("request"); 
const app = express();

app.use(express.static("/css"));
app.get("/",function(req,res){

res.sendFile(__dirname+ "/try2.html");


});

app.listen(3000,function(){
console.log("server is running on port 3000");

});