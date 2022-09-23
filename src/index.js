// import "./main.scss";
// import "../lesson-2/classwork-2/index"
// import "../lesson-2/classwork-3/index"
// import "../lesson-2/ANKETA/index"

// console.error('Test');
// const t = 'sdfjmsd';

// const noWroteLetters = 5; const unreadMessages;
// const isRegisterUser = true; isRegistered
// const favoriteGenres = ["drama", "comedy", "triller",];

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let j = 0;

// do {
//     j++;
//     console.log(j);
// } while (j <= 10);

// for (let i = '#'; i.length <= 7; i += "#") {
//     console.log(i);
// }

// const input = prompt('Enter currency:');

// const currency = {
//     usd: 'dollar',
//     eur: 'euro',
//     blr: 'bel rouble',
//     rus: 'russian rouble',
//     zlt: 'poland zloty',

// }

// currency.lat = 'latvian lat';
// currency['grv'] = 'ukrainian grivna';

// alert(currency[input]);

// let descriptor = Object.defineProperty(statusUser, 'online', {
//     value: 'sdfsdf',
//     wriable: false,
//     enumerable: false,
//     configurable: false,
// })

// descriptor.online = ' dsfsdfsdf';
// console.log(descriptor);

// let user = {
//     name: 'Valery',
//     age: 27,
//     isMarried: true,
//     anyKids: null,
// }

// Object.defineProperty(user, 'name', {
//     writable: false,
//     enumerate: false,
//     configurable: false,
// });

// user.name = 'Pavel';

// console.log(user);
// console.log(user.name);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }

// let sum = 0;

// for (const key in salaries) {
//     sum += salaries[key];
// }

// alert(sum);

// function calcSum(a, b) {
//     return a + b;
// }

// let result = calcSum(2, 3);

// console.log(result);

// function sayHi() {
//     for (const arg of arguments) {
//         console.log(arg);
//     }
// }

// sayHi('123', '123123', 112321312, 'asdasd', {name: 'hello'});


// function sayHi(...params) {
//     for (const arg of params) {
//         console.log(arg);
//     }
// }

// const obj1 = {
//     name: 'sdfsdf',
// };

// const obj2 = {
//     fullName: 'sdfdsfds',
//     ...obj1,
// };

// console.log(obj2);

// const sayHello2 = (a, b) => a + b;

// let getAny = (...some) => {
//     let sum = 0;
//     for (const arg of some) {
//         sum += arg;
//     }
//     return sum;
// };

// let result = getAny(1, 2, 3, 7, 5);

// console.log(result);

// const min = (a, b) => a < b ? a : b;

// const isPalindrom = (text) => {
//     let text2 = '';
//     for(let i = text.length - 1; i >= 0; i--) {
//         text2 += text[i];
//     }
//     return text2 === text;
// }

// console.log(isPalindrom('шалаш'));