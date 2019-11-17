var chalk = require('chalk');

function user(name){
    this.name = name;
}
user.prototype.sayHi = function(){
    console.log('xin chào ' + chalk.red(this.name));
}

module.exports = user;