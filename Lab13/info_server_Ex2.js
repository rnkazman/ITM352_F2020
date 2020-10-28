var express = require('express');
var app = express();
var myParser = require("body-parser");

app.use(express.static('./public'));
app.use(myParser.urlencoded({ extended: true }));

app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);
    next();
});

function isNonNegInt(stringToCheck, returnErrors = false) {
    errors = []; // assume no errors at first
    if (Number(stringToCheck) != stringToCheck) errors.push('Not a number!'); // Check if string is a number value
    if (stringToCheck < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(stringToCheck) != stringToCheck) errors.push('Not an integer!'); // Check that it is an integer

    return returnErrors ? errors : (errors.length == 0);
}

app.post("/process_form", function (request, response) {
    console.log("Got POST");
    let POST = request.body;
    //response.send(POST); 
    if (typeof POST['quantity_textbox'] != 'undefined') {
        qty = POST["quantity_textbox"];
        console.log(qty);
        if (isNonNegInt(qty, false)) {
            response.send(`Thank for you for ordering ${qty} things!`);
            //window.stop();
        } else {
            response.send(`${qty} is not a quantity! Press the back button and try again.`);
        }
    }
});

app.listen(8080, () => console.log(`listening on port 8080`));
