import { search } from './search.js';
import { people } from './people.js';

console.log("Пошук по age: 18");
search(people, 'age', 18)
    .then(results => {
        console.log('Знайдено:');
        results.forEach(person => {
            console.log(person.greeting()); 
            console.log(`Стать: ${person.getInfo('gender')}`); 
        });
    })
    .catch(error => {
        console.error(error);
    });

console.log("Пошук за імемем Михайло");
search(people, 'name', "Михайло")
    .then(results => {
        console.log('Знайдено:');
        results.forEach(person => {
            console.log(person.greeting()); 
            console.log(`Стать: ${person.getInfo('gender')}`);
        });
    })
    .catch(error => {
        console.error(error);
    });

console.log("Пошук по age: 50");
search(people, 'age', 50)
    .then(results => {
        console.log('Знайдено:');
        results.forEach(person => {
            console.log(person.greeting());
            console.log(`Стать: ${person.getInfo('gender')}`);
        });
    })
    .catch(error => {
        console.error(error);
    });
