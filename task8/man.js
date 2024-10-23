import Human from './human.js';

export default class Man extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, 'man');
    }

    greeting() {
        return `Hi! I'm ${this.name}, and I'm ${this.age} years old.`;
    }
}
