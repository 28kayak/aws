/**
 * Created by kaya on 11/12/16.
 */
/**
 * Created by kaya on 11/6/16.
 */
var express = require('express');


var app = express();
var port = 8888;
//if it is Ok to add port number as in check field 
app.use('/', function(req,res){
    res.end("AMAZON");
});
app.listen(port, function(){console.log("http://172.31.14.74:80")});//172.31.14.74:
