
// const fridge = ['Butter', 'Bread', 'Oil', 'Tomato', 'Apple', 'Cucumber', 'Sausage', 'Cheese'];
// const recipe = ['Bread', 'Butter', 'Tomato', 'Sausage', 'Cheese'];

// const sandwich = fridge.filter((item) => recipe.includes(item))
//     .map((_, __, array) => array[Math.ceil(Math.random() * array.length - 1)])
//     .reduce((plate, item) => plate + item + ' ', '');

//     console.log(sandwich);

// const user = {
//     name: 'Name',
//     age: 29,
//     job: 'engineer',
// //     [Symbol.iterator]() {
// //         return {
// //             counter: 0,
// //             next() {
// //                 if(this.counter !== 5) {
// //                     return {
// //                         done: false,
// //                         value: this.counter++
// //                     }
// //                 }
// //                 return {
// //                     done: true
// //                 }
// //             }
// //         }    
// //     }

// };

// console.log(Object.values(user));

// Generator:
// function test1() {
//     yield 0;
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// function generateSequence(start, end) {
//     for (let i = start; i <= end; i++) {
//         yield i;
//     }
// }

// const array = [...generate(0, 10)];

// function generatePasswordCodes() {
//     yield generatePasswordCodes(10, 99);
// }

// generateSequence:
// String.forCharCode(code);

// JSON:
// '{
//     "id": ""/5/[]
// }'

// try/catch:
// const makeRequest = axios () => {
// try {
//     const response = awayt axios();
// }   catch (error) {
//     console.log(error);
// }   finally {
//     console.log('finally')
// }
// };

//regularExp
// const regExp1 = /hello/ig;
// // const regExp2 = new RegExp('template');

// // console.log('Hello'.match(regExp1));
// console.log(regExp1.test('asdasd hello'));

// regex (site):
//\d num
//\s space
//\w words
// \. dots
// ^.* start
// ^.+
// ^.{1,2}
// $ end