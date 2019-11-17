var user = require("./hello");
var food = require("./food");

var user = new user('tùng');

user.sayHi();

var food = new food('hambuger');

user.eat(food);