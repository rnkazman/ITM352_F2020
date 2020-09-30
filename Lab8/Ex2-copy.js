var number = 0; // Counter for age
var myAge = 8; // My age

console.log("Silly counting program for Ex2, with if-else");
while (number < myAge) {
    number++;
    if ((number >= myAge / 2) && (number <= myAge * 3 / 4)) {
        console.log(" ");
    } else {
        console.log("Age=" + number);
    }  
}
console.log("I'm outta here!");