var express = require('express');
var app = express();
var myParser = require("body-parser");
var data = require('./public/product_data.js');
var products = data.products;
var fs = require('fs');

app.use(express.static('./public'));
app.use(myParser.urlencoded({ extended: true }));

function process_quantity_form(POST, response) {
    let model = products[0]['model'];
    let model_price = products[0]['price'];

    if (typeof POST['quantity_textbox'] != 'undefined') {
        q = POST["quantity_textbox"];
        //console.log(q);
        if (isNonNegInt(q, false)) {
             var contents = fs.readFileSync('./views/display_quantity_template.view', 'utf8');
            response.send(eval('`' + contents + '`')); // render template string
        } else {
            response.send(`${q} is not a quantity! Press the back button and try again.`);
        }
    }
}

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
    let POST = request.body;
    process_quantity_form(POST,response);
});

app.listen(8080, () => console.log(`listening on port 8080`));
