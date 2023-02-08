console.log('hello');

const obj = {};

const arr = [];

const map = new Map();

class SayName {
    whatIsYourName() {
        return this.name;
    }
}

class Cat extends SayName {
    constructor(name, color) {
        super();
        this.name = name;
        this.color = color;
        this.age = Math.floor(Math.random() * 11 + 1);
    }
}

class Dog extends SayName {
    constructor(name) {
        super();
        this.name = name;
        this.age = Math.floor(Math.random() * 15 + 1);
    }
}

const murka = new Cat('Murka', 'brown');
const pilkis = new Dog('Pilkis');


//console.log(obj);
//console.log(arr);
//console.log(map);
console.log(murka);
console.log(pilkis);
console.log(pilkis.whatIsYourName());
console.log(murka.whatIsYourName());