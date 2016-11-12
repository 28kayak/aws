/**
 * Created by kaya on 11/12/16.
 */
var express = require("express");
var app = express();
var basicAuth = require('basic-auth');

var auth = function (req, res, next) {
    var user = basicAuth(req);
    if (!user || !user.name || !user.pass) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        //res.sendStatus(401);
        //res.end("error");
        res.end('<!DOCTYPE HTML PUBLIC -//IETF//DTD HTML 2.0//EN"> \n<html><head> <title>401 Authorization Required</title> </head><body>\n'+
            "<h1>Authorization Required</h1>\n"+
            "<p>This server could not verify that you are authorized to access the document"+
            "requested.  Either you supplied the wrong"+
            "credentials (e.g., bad password), or your"+
            "browser doesn't understand how to supply"+
            "the credentials required.</p>\n"+
            "<hr>\n"+
            "<address>Apache/2.2.29 (Amazon) Server at 1.2.3.4 Port 8080</address>\n"+
            "</body></html>\n");
        return;
    }
    if (user.name === 'amazon' && user.pass === 'candidate') {
        console.log("Success");
        next();
    } else {
        console.log("Pass or name is wrong");
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        //res.sendStatus(401);
        res.end('<!DOCTYPE HTML PUBLIC -//IETF//DTD HTML 2.0//EN"> \n<html><head> <title>401 Authorization Required</title> </head><body>\n'+
        "<h1>Authorization Required</h1>\n"+
        "<p>This server could not verify that you are authorized to access the document"+
        "requested.  Either you supplied the wrong"+
        "credentials (e.g., bad password), or your"+
        "browser doesn't understand how to supply"+
        "the credentials required.</p>\n"+
        "<hr>\n"+
        "<address>Apache/2.2.29 (Amazon) Server at publicIP Port 8080</address>\n"+
        "</body></html>\n");
        return;
    }
}

app.get("/secret", auth, function (req, res) {
    res.send("SUCCESS\n");
});

app.listen(8080);
console.log("app running on localhost:8080");
