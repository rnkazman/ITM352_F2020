const howManyPizza = require("how-many-pizza");

for (teamSize = 1; teamSize <= 12; teamSize++) {
    console.log("You need %s pizzas for %d people", howManyPizza(teamSize), teamSize);
}
