"use strict";
class Dog {
    constructor() {
        this.state = 'happy';
    }
    bark() {
        return "Woof! Woof! I am " + this.state;
    }
}
var maja = new Dog();
console.log(maja.state);
console.log(maja.bark());
