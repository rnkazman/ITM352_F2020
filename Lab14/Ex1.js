var fs = require('fs');

var filename = "./user_data.json";

data = fs.readFileSync(filename, 'utf-8');

user_data = JSON.parse(data);
console.log("User_data=", user_data);

user_reg_data = require("./user_data.json");
console.log("User_reg_data=", user_reg_data);
