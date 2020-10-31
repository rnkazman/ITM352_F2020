var express = require('express');
var app = express();
var myParser = require("body-parser");

app.use(express.static('./public'));
app.use(myParser.urlencoded({ extended: true }));

function isNonNegInt(stringToCheck, returnErrors = false) {
    errors = []; // assume no errors at first
    if (Number(stringToCheck) != stringToCheck) errors.push('Not a number!'); // Check if string is a number value
    if (stringToCheck < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(stringToCheck) != stringToCheck) errors.push('Not an integer!'); // Check that it is an integer

    return returnErrors ? errors : (errors.length == 0);
}

app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);
    next();
});

app.post("/process_form", function (request, response) {
    console.log("Got POST");
    let POST = request.body;
    //response.send(POST); 
    if (typeof POST['quantity_textbox'] != 'undefined') {
        qty = POST["quantity_textbox"];
        console.log(qty);
        if (isNonNegInt(qty, false)) {
            response.send(`<font color=blue>Thank <b>you</b> for ordering ${qty} things!</font>`);
            //window.stop();
        } else {
            response.send(`${qty} is not a quantity! Press the back button and try again.`);
        }
    }
});

app.listen(8080, () => console.log(`listening on port 8080`));
