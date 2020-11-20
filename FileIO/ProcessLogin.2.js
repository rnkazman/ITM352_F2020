/*
 *  File: ProcessLogin.js
 *  Author: Rick Kazman
 *  Created: Nov. 13, 2020
 *  Purpose: Create a server to generate a login form, validate, and process login info
 */

var express = require('express');
var app = express();
var myParser = require("body-parser");
var fs = require('fs');
var myParser = require('body-parser');
var queryString = require('query-string');

var filename = "user_data.json";
var raw_data = fs.readFileSync(filename, 'utf-8');
var user_data = JSON.parse(raw_data);

var current_username;                        // Variable to store username on server
var login_err = { username: '', password: '' };  // object to capture login error info
var pwd_errors = [];                         // Array of password error messagess
var password_errors = "";                    // String to hold password error messages

app.use(myParser.urlencoded({ extended: true }));

function checkPassword(passwordIn) {
    errors = [];
    if (passwordIn.length < 6)
        errors.push("Password too short");
    if (passwordIn.length > 10)
        errors.push("Password too long");

    return errors;
}

app.get("/login", function (request, response) {
    // Give a simple login form
    str = '';
    if (typeof current_username != 'undefined') {
        str = `Currently logged in: ${current_username}<br>`;
    }
    // Give a simple login form
    str += `
<body>
<form action="process_login" method="POST">
<input type="text" name="username" value="${login_err['username']}" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
`;
    response.send(str);
});

app.post("/process_login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not

    login_err['username'] = '';
    login_err['password'] = '';

    // if user exists, get their password
    if (typeof user_data[request.body.username] != 'undefined') {
        if (request.body.password == user_data[request.body.username].password) {
            response.send('Congrats ' + request.body.username + ". You are logged in!");
        } else {
            // str = `<script>alert('Hey! ${request.body.password} does not match what we have for you!');window.history.back();</script>`;
            login_err['username'] = request.body.username;
        }
    } else {
        login_err['password'] = request.body.password;
    }
    response.redirect('/login');
});

app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
        <body>
        <form action="/process_register" method="POST">
        <input type="text" name="username" size="40" placeholder="enter username" ><br />`;

    if (password_errors.length != 0) {
        str += `<input type="password" name="password" size="40" placeholder="enter password"> <font color="red">${password_errors}</font><br />
        <input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />`;
    } else {
        str += `<input type="password" name="password" size="40" placeholder="enter password"><br />
                <input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />`;
    }
    str += `<input type="email" name="email" size="40" placeholder="enter email"><br />
            <input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
});

app.post("/process_register", function (request, response) {
    // process a simple register form
    POST = request.body;
    if (POST["username"] != undefined && POST["password"] != undefined) {
        pwd_errors = checkPassword(POST["password"]);

        if (pwd_errors.length != 0) {
            password_errors = pwd_errors.join();
            console.log("Pwd errors=" + password_errors);
            response.redirect("register");
        } else {
            username = POST["username"];
            user_data[username] = {};
            user_data[username].name = username;
            user_data[username].password = POST["password"];
            user_data[username].email = POST["email"];

            data = JSON.stringify(user_data);
            fs.writeFileSync(filename, data, "utf-8");

            response.send("User " + username + " added");
        }
    }
});

app.listen(8080, () => console.log(`listening on port 8080`));
