'use strict';

// Identifiers

// 1.Define variable to store your name as a string.
let name = 'Stanislav Solovyov';

// 2.Define constant to store your birth year as a number.
const BIRTHDATE = 1989;

// 3.Prepare function to print greeting with single argument.
const greeting = name => console.log(`Hello ${name}!`);

// 4.Call function passing value as literal
greeting('Stanislav Solovyov');

// 5.Call function passing variable.
greeting(name);

// 6.Call function passing constant.
greeting(BIRTHDATE);



// Loop

// 1.Print all odd numbers from the range [15, 30] including endpoints.
for (let i = 15; i <= 30; i++) {
  if (i % 2 === 1) console.log(i);
}

/* 2. Implement function range(start: number, end: number) doing the same task.*/
const range = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 1) console.log(i);
  }
};
range(15, 30);



// Function

/* 1.Implement function average with signature average(a: number, b: number): number calculating average (arithmetic mean).*/
const average = (a, b) => (a + b) / 2;
console.log(`Average: ${average(12, 4)}`);

/* 2.Implement function square with signature square(x: number): number calculating square of x.*/
const square = a => a**2;
console.log(`Squared: ${square(-10)}`);

// 3.Implement function cube with signature cube(x: number): number calculating cube of x.
const cube = a => a**3;
console.log(`Cubed: ${cube(10)}`);

/* 4.Call functions square and cube in loop, then pass their results to function average. Print what average returns.*/
for(let i = 1; i <= 10; i++) {
    const squared = square(i);
    const cubed = cube(i);
    const averageNumber = average(squared, cubed);
    console.log(`Average: ${averageNumber}`);
}



// Object

// 1.Define constant object with single field name.
const person = { name: 'Stanislav' };

// 2.Define variable object with single field name.
let anotherPerson = { name: 'John' };

// 3.Try to change field name and assign other object to both identifiers. Explain script behaviour.
console.log(`Name before change(const): ${person.name}`);
person.name = 'Dan'
console.log(`Name after change(const): ${person.name}`);
console.log(`Name before change(let): ${anotherPerson.name}`);
anotherPerson.name = 'Dan'
console.log(`Name after change(let): ${anotherPerson.name}`);

// person = { name: 'Tom' }; // TypeError: Assignment to constant variable.
anotherPerson = { name: 'Tom' };
console.log(`Name after reassigning to another object: ${anotherPerson.name}`);

/* Explanation:
When changing object properties we do not change the actual reference to the memory slot, where this object is located.
Nevertheless when we try to reassign another value to const identifier, it is needed to change the reference in memory,
so it would point to another location, which is a contradiction to the const concept.*/

/* 6.Implement function createUser with signature createUser(name: string, city: string): object.
Example: createUser('Marcus Aurelius', 'Roma') will return object { name: 'Marcus Aurelius', city: 'Roma' }*/
const createUser = (name, city) => ({
    name, city
});

console.log(createUser('Marcus Aurelius', 'Roma'));




// Array

/* 1.Define array of objects with two fields: name and phone (phone book). Example: { name: 'Marcus Aurelius', phone: '+380445554433' }.*/
const contacts = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'John Marston', phone: '+380441233212' },
];

/*2.Implement function findPhoneByName with signature findPhoneByName(name: string): string.
Returning phone from that object where field name equals argument name. Use for loop for this search.*/
const findPhoneByName = (name) => {
    for(const contact of contacts) {
        if(contact.name === name) {
            return contact.phone;
        }
    }
}

console.log(findPhoneByName('John Marston'));




// Hash

/*Define hash with key contains name (from previous example) and value contains phone.*/
const hashContacts = {
   'Marcus Aurelius': '+380445554433',
   'John Marston': '+380441233212',
};

/*Implement function findPhoneByName with signature findPhoneByName(name: string): string.
Returning phone from hash/object. Use hash[key] to find needed phone.*/
const findPhoneByNameFromHash = name => {
    for(const key in hashContacts) {
        if(key === name) {
            return hashContacts[key];
        }
    }
}

console.log(findPhoneByNameFromHash('Marcus Aurelius'));