var values = ["2", "-3", "asdf", "-3.14156", "5"];

function isNonNegInt(stringToCheck, returnErrors = false) {
    errors = []; // assume no errors at first
    if (Number(stringToCheck) != stringToCheck) errors.push('Not a number!'); // Check if string is a number value
    if (stringToCheck < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(stringToCheck) != stringToCheck) errors.push('Not an integer!'); // Check that it is an integer

 /*   if (returnErrors) {
        return errors;
    } else {
        return errors.length == 0;
    }
    */
   return returnErrors ? errors : (errors.length == 0);
}

for (i = 0; i < values.length; i++) {
    console.log("String \'" + values[i] + "\' is " + isNonNegInt(values[i],true).join("||"));
}


function callback(item, index) {
    returnedErrors = isNonNegInt(item,true).join("||");
    if (returnedErrors.length == 0) {
        console.log("Item \'" + item + "\' at index " + index + " is good");  
    } else {
        console.log("Item \'" + item + "\' at index " + index + " is " + returnedErrors);
    } 
}

console.log("**************");
values.forEach(callback);