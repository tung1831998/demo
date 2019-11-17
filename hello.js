var chalk = require('chalk');

function user(name){
    this.name = name;
    this.stomach =[];
}

function food(name){
    this.name = name;
}

user.prototype.sayHi = function(){
    console.log('xin chào ' + chalk.red(this.name));
}

user.prototype.eat = function(food){
    this.stomach.push(food);
}


module.exports = user;
module.exports = food;