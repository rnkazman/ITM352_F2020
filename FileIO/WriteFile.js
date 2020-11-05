var fs = require('fs');

filename = "info.dat";
data = "\nThis is an appendage.";

fs.appendFileSync(filename, data, "utf-8");
