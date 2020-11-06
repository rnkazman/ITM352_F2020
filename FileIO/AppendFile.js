var fs = require('fs');

data = "\nHere is some new stuff";
filename = "info.dat";

fs.appendFileSync(filename, data, "utf-8");
