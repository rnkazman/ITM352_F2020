var fs = require('fs');
var myParser = require('body-parser');

var filename = "user_data.json";

var raw_data = fs.readFileSync(filename, 'utf-8');
var user_data = JSON.parse(raw_data);
console.log(user_data);
