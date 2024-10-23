const currentYear = new Date().getFullYear();

const nameAndAge = (name, birthYear = null) => {
    if (birthYear !== null) {
        const age = currentYear - birthYear;
        return `Я ${name}, мені ${age} років.`;
    }
    return `Я ${name}.`;
};

console.log(nameAndAge('Максим', 2006));
console.log(nameAndAge('Михайло'));

class Human {
    constructor(name, age, weight, gender) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }

    getInfo(prop = null) {
        if (prop === null) {
            return { name: this.name, age: this.age, weight: this.weight, gender: this.gender };
        }
        return this[prop];
    }

    greeting() {
        return "Hi!";
    }
}

var person = new Human ("Максим", 18, 52, "man");
var person2 = new Human ("Михайло", 18, 58, "man");

console.log(person.getInfo());
console.log(person.getInfo("name"));
console.log(person.getInfo("age"));
console.log(person.greeting());

console.log(person2.getInfo());
console.log(person2.getInfo("name"));
console.log(person2.getInfo("age"));
console.log(person2.greeting());




class Man extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, 'man');
    }

    greeting() {
        return `Hi! I'm ${this.name}, and I'm ${this.age} years old.`;
    }
}

class Woman extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, 'woman');
    }

    greeting() {
        return `Hi! I'm ${this.name}.`;
    }
}

var man = new Man ("Максим", 18, 52);
var woman = new Woman ("Лана", 18, 48);

console. log(man.greeting());
console. log(woman.greeting());

const people = [
    new Man('Михайло', 18, 58),
    new Woman('Лана', 18, 48),
    new Man('Максим', 18, 52),
    new Woman('Наталя', 25, 55),
    new Man('Петро', 35, 80),
    new Woman('Ірина', 32, 65),
    new Man('Микола', 27, 70),
    new Woman('Анна', 24, 50),
    new Man('Дмитро', 29, 77),
    new Woman('Тетяна', 33, 68),
    new Man('Іван', 31, 74),
    new Woman('Людмила', 26, 56),
    new Man('Сергій', 36, 82),
    new Woman('Марія', 23, 52),
    new Man('Андрій', 37, 83)
];

console.log("6 завдання");
people.forEach(person => console.log(person.greeting()));

function search(list, searchField, searchValue) {
    return new Promise((resolve, reject) => {
        const delay = 1000;
        setTimeout(() => {
            const results = list.filter(person => person[searchField] === searchValue);
            if (results.length > 0) {
                resolve(results); 
            } else {
                reject(`No results found for ${searchField}: ${searchValue}`); 
            }
        }, delay);
    });
}


console.log("7 завдання");
search(people, 'age', 18)
    .then(results => {
        console.log('Found:');
        results.forEach(person => {
            console.log(person.greeting()); 
        });
    })
    .catch(error => {
        console.error(error);
    });