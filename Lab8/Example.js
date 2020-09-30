// Sum the numbers up to a specified integer
// Date: Sept. 30, 2020
// Author: Rick Kazman

var target = 5 ;    // Limit of the sum of numbers
var counter = 1;    // Countner for the loop
var sum = 0;        // Total of the numbers added together

console.log(`Welcome to the counting program!`);
while (counter <= target) {
    sum += counter;
    console.log(`Sum=${sum}`);
    counter++;
}

console.log (`Final Sum=${sum}`);

sum = 0;
console.log('Second try with For loop');
for (counter=5; counter > 0; counter=counter-2) {
    sum += counter;
    console.log(`Sum=${sum}`);
}
console.log (`Final Sum=${sum}`);
