var fs = require('fs');

filename = "info.dat";

if (fs.existsSync(filename)) {	
    data = fs.readFileSync(filename, 'utf-8');
    console.log("Success! we got: " + data);
} else
{
    console.log("Sorry, file not found.");
}
