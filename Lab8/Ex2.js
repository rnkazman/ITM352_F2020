var number = 0; // Counter for age
var myAge = 8; // My age

console.log("Silly counting program for Ex2, with break");
while (number < myAge) {
    number++;
    if ((number >= myAge / 2) && (number <= myAge * 3 / 4)) {
        continue;
    }
    console.log("Age=" + number);
}
console.log("I'm outta here!");