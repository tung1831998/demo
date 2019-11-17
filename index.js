var User = require("./user");
var Food = require("./food");

var user1 = new User('tùng');
var food1 = new Food('hambuger');
var food2 = new Food('tomato');
user1.eat(food1);
user1.eat(food2);

console.log(user1);
