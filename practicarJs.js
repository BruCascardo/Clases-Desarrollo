'use strict';
// High order functions
// const calculo = (n1,operacion,n2) => {
//   console.log((operacion(n1,n2)));
// }

// function suma (n1,n2) {
//   return n1 + n2;	
// }

// function resta (n1,n2) {
//   return n1 - n2;	
// }

// function multiplicacion (n1,n2) {
//   return n1 * n2;	
// }

// function division (n1,n2) {
//   return n1 / n2;	
// }

// function raiz (n1) {
//   return Math.sqrt(n1);	
// }

// calculo(5,suma,4);

// Objects functions

// function Person (firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }
// Person.prototype.greet = function () {
//   return `Hello! I'm ${this.firstName} ${this.lastName}. I'm ${this.age} years old.`;
// }
// const bruno = new Person('Bruno', 'Cascardo', 19);

// function Author(firstName, lastName, age, quote) {
//   Person.call(this, firstName, lastName, age);
//   this.quote = quote;
// }

// Author.prototype = Object.create(Person.prototype);
// Author.prototype.constructor = Author;

// Author.prototype.sayQuote = function() {
//   return `I said: ${this.quote}`;
// }

// const carlos = new Author('Carlos', 'Ruiz Zafón', 55, 'La sombra del viento');

// console.log(carlos.greet());
// console.log(carlos.sayQuote());

// Objects constructor

const Person = {
  init(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.grr = function () {
      return `Hello! I'm ${this.firstName} ${this.lastName}. I'm ${this.age} years old.`;
    }
  }
};

const Author = {
  __proto__: Person,
  init(firstName, lastName, age, quote) {
    Person.init.call(this, firstName, lastName, age);
    this.quote = quote;
    this.sayQuote = function () {
      return `I said: ${this.quote}`;
    }
  }
}

const bruno = Object.create(Author);
bruno.init('Bruno', 'Cascardo', 19, 'Hello World');
console.log(bruno);

// import fs from 'fs';

// mostrar data.txt

// Asynchronic

// console.log('Inicio del data.txt');
// function printData(err, data, cb) {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
//   cb();
// }

// fs.readFile('./data.txt', { encoding: 'utf8' }, (err, data) => {
//   printData(err, data, () => console.log('Fin del data.txt'));
// });

// Synchronic

// console.log('Inicio del data.txt');
// const data = fs.readFileSync('./data.txt', { encoding: 'utf8' });
// console.log(data);
// console.log('Fin del data.txt');

// Promesas

// import { readFile } from 'node:fs/promises';

// console.log('Inicio del data.txt');
// readFile('./data.txt', { encoding: 'utf8' })
//   .then((data) => {
//   console.log(data);
//   })
//   .then((data) => {
//   console.log('Fin del data.txt');
//   })
//   .catch((err) => { console.error(err); });

// async/await con promesas, se escribe como si fuera sincrono pero se ejecuta asincrono

// import { readFile } from 'node:fs/promises';

// async function printData() {
//   try {
//     console.log('Inicio del data.txt');
//     const data = await readFile('./data.txt', { encoding: 'utf8' });
//     console.log(data);
//     console.log('Fin del data.txt');
//   } catch (err) {
//     console.error(err);
//   } finally {
//     console.log('Proceso finalizado');
//   }
// }

// await printData();