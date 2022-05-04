const EventEmitter = require("events");

let eventName = "greet";
let eventName1 = "greet1";

class User extends EventEmitter {
    sayHi(en, data) {
        this.emit(en, data);
    }
}

let user = new User();

user.on(eventName, function(data) {
    console.log(data);
    console.log('Ботинки и мотоцикл');
});

user.on(eventName1, function(data) {
    console.log(data);
    console.log('Ботинки1 и мотоцикл1');
});

user.sayHi(eventName, "Мне нужна твоя одежда...");
user.sayHi(eventName1, "Мне2 нужна2 твоя2 одежда2...");