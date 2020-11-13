var fs = require('fs');

var filename = "user_data.json";

data = fs.readFileSync(filename, 'utf-8');
user_data = JSON.parse(data);

username = 'newuser';
user_data[username] = {};
user_data[username].name = "Joe Schmo";
user_data[username].password = "pass";
user_data[username].email = "joe@joe.com";

data = JSON.stringify(user_data);
fs.writeFileSync(filename, data, "utf-8");
