/**
 * Created by kaya on 11/3/16.
 */
var express = require('express');
var http = require('http');
var app = express();

/*app.use("/", function (req, res){
 console.log("in app.use /")
 var tmp = req.query.;
 console.log(tmp);

 });*/

function calc(equation){
    //var queue = new Array();
    //var stack = new Array();
    var result;
    //var equ = equation.split('');
    //var index = 0;

    /*while(index <= equ.length)
     {
     if()
     }*/
    //console.log(Number.isNaN(equation))
    try
    {
        result = eval(equation);//code to try
        //console.log("result = "+result);
        //given equation is not  result = "ERROR";
    }
    catch (err)
    {
        result = "ERROR";
    }

    return result;

}
/*app.use('/endpoint', function(request, response) {
 console.log('in endpoint');
 var color = request.query.color;
 var id = request.query.id;
 console.log(request.query);
 response.end("I have received the ID: " + color);
 });*/
app.use('/calc', function (req,res) {
    //console.log("in calc");
    var url = req.url;
    var equation = url.substring(2);
    //console.log(url);
    var ans = calc(equation);
    //console.log(ans);
    // var splited = url.split('');
    //for(var i = 0; i < splited.length; i++)
    //{
    //  console.log(splited[i]);
    //}

    //console.log(ans);


    /*var input = req.query;
     var i = JSON.stringify(input)
     console.log(i);
     */
    //res.end("equation = " + equation +"\n" + "answer = " + ans + "\n");
    res.end(ans+"\n");


})
app.listen(8080);
console.log("node express app started at http://localhost:8080");


