'use strict';

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