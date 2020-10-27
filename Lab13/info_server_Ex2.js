var express = require('express');
var app = express();
var myParser = require("body-parser");

app.use(express.static('./public'));
app.use(myParser.urlencoded({ extended: true }));

app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);
    next();
});

app.post("/process_form", function (request, response) {
    console.log("Got POST");
    let POST = request.body;
    console.log(request);
    response.send(POST); 
});

app.listen(8080, () => console.log(`listening on port 8080`));
