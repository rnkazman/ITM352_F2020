var fs = require('fs');

var filename = "user_data.json";

data = fs.readFileSync(filename, 'utf-8');
console.log("Success! We got: " + data);

user_data = JSON.parse(data);
console.log("User_data=", user_data);
