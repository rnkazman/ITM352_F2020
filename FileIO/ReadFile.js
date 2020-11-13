var fs = require('fs');

var filename = "info.dat";

if (fs.existsSync(filename)) {	
    data = fs.readFileSync(filename, 'utf-8');
    console.log("Success! We got: " + data);
    statsObj = fs.statSync(filename); 
    console.log("File is %d characters", statsObj.size);
} else
{
    console.log("Sorry bud. File " + filename + " does not exist");
}

