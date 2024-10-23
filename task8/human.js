export default class Human {
    constructor(name, age, weight, gender) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }

    getInfo(prop = null) {
        if (prop === null) {
            return {
                name: this.name,
                age: this.age,
                weight: this.weight,
                gender: this.gender
            };
        }
        return this[prop];
    }

    greeting() {
        return `Hi!`;
    }
}
