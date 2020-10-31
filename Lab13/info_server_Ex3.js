var express = require('express');
var app = express();
var myParser = require("body-parser");

app.use(express.static('./public'));
app.use(myParser.urlencoded({ extended: true }));



app.all('*', function (request, response, next) {
    response.send(request.method + ' to path: ' + request.path);
    next();
});

app.post("/process_form", function (request, response) {
    console.log("Got POST process_form")
    let POST = request.body;
    //response.send(POST); 
});

app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here
