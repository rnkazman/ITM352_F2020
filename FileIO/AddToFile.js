var fs = require('fs');
var myParser = require('body-parser');

var filename = "user_data.json";

var raw_data = fs.readFileSync(filename, 'utf-8');
var user_data = JSON.parse(raw_data);

username = 'newuser';
user_data[username] = {};
user_data[username].name = "Joe Schmoe";
user_data[username].password = 'newpass';
user_data[username].email = 'newuser@user.com';

data = JSON.stringify(user_data); 
fs.writeFileSync(filename, data, "utf-8");
