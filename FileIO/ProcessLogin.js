var express = require('express');
var app = express();
var myParser = require("body-parser");
var fs = require('fs');
var myParser = require('body-parser');

var filename = "user_data.json";
var raw_data = fs.readFileSync(filename, 'utf-8');
var user_data = JSON.parse(raw_data);

app.use(myParser.urlencoded({ extended: true }));

app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="/login" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
});

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    //console.log("Got login POST");
    POST = request.body;
    if (POST["username"] != undefined) {
        response.send(`<H3>User ${POST["username"]} logged in`);
    }
});

app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
<body>
<form action="/register" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
<input type="email" name="email" size="40" placeholder="enter email"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
});

app.post("/register", function (request, response) {
    // process a simple register form
    POST = request.body;
    if (POST["username"] != undefined && POST["password"] != undefined) {
        username = POST["username"];
        user_data[username] = {};
        user_data[username].name = username;
        user_data[username].password = POST["password"];
        user_data[username].email = POST["email"];

        data = JSON.stringify(user_data);
        fs.writeFileSync(filename, data, "utf-8");

        response.send("User " + username + " added");
    }
});

app.listen(8080, () => console.log(`listening on port 8080`));