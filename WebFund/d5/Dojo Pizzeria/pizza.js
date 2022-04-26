function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizzaOrder = pizzaOven("deep dish","traditional", "mozzerella", ["pepperoni", "sausage"]);
var pizzaOrder2 = pizzaOven("hand tossed", "marinara", ["mozzerella","feta"], ["mushrooms", "olives", "onions"]);
var pizzaOrder3 = pizzaOven("thin crust", "zesty tomato", "Mozzerella", ["pepperoni", "sun-dried tomatoes", "green peppers", "Onions"]);
var pizzaOrder4 = pizzaOven("flatbread", "white sauce", ["mozzerella", "white Cheddar"], ["red wine vinegar", "mushrooms","chicken"]);

