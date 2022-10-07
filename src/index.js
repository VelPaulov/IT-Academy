
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
// const regExp2 = new RegExp('template');

// console.log('Hello'.match(regExp1));
// console.log(regExp1.test('asdasd hello'));

// regex (site):
// \d num
// \s space
// \w words
// \. dots
// ^.* start
// ^.+
// ^.{1,2}
// $ end

// Regular Exp:
// const regExp1 = new RegExp('template', 'i');
// const regExp2 = /template/i;

// const str = 'Template';
// console.log(str.match(regExp1));
// console.log(str.match(regExp2));
// console.log(regExp2.test(str));

// https://regex101.com/

// \. - dots
// \d - numbers
// \w - words
// \s - space
// \t - tabulation
// \w+\. - some words and .
// \w{1,2} - words from 1 to 2
// gr[a|e]y - gr + a or e and y
// gr[a-z]y - gr + alphavet and y
// [0-9] - only numbers
// ^asd - start string
// asd$ - end string
// <h[1-6]>[a-z0-9]+<\/h[1-6]> - search - h1-h6
// .* - сколько угодно
// https?:\/\/\w+.\w{2,3} - check valid addres (? - optional, {} - diapason)
// \W - отрицание (большая буква)б (что угодно, кроме...)
// \w+@\w+.\w+ - search site address

// const str = `
// <h1></h1>
// <h2>sdfsd</h2>
// <h3>edfsdf</h3>
// <h4>sdfsdf</h4>
// <h5>fgdf</h5>
// <h6>sdfsdf</h6>
// `;
// console.log(str. replace(regExp2, '<div>'));

// 1 Imperative programming

// 2 Declarative programming

// 3 Functional programming

// 4 OOP:

// bind(obj) - привязывает контекст this к obj;
// const print - obj.print.bind(obj);
// call(obj, 123123, 312312) - определяет контекст this с набором аргументов obj и вызывает
// apply(obj, [1, 2]) - как call, но принимает аргументы через массив

// This:
// const user = {
//     firstName: 'Alex',
//     lastName: 'Klimenok',
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// console.log(user.getFullName());

// Classes & Functions-Constructors (ES-5):
// const User1 = function (firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// const user1 = new User1 ('Alex', 'Klimenok', 27);
// console.log(user1.firstName);

// const getUserAgeInFiveYears = function () {
//     return this.age + 5;
// }

// user1.getFutureAge = getUserAgeInFiveYears;
// console.log(user1.getFutureAge());

// Classes & Functions-Constructors 2 (ES-6):
// class User2 {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const user2 = new User2 ('Alex', 'Klimenok');
// console.log(user2.getFullName());

// OOP principals:
// Extend:
// ES5:
// const User = function (name) {
//     this.name = name;
// }

// function ChildUser(name, childName) {
//     User.call(this, name);
//     this.childName = childName;
// }

// ChildUser.prototype = Object.create(User.prototype);
// ChildUser.prototype.getFullName = function() {
//     return `${this.childName} ${this.name}`;
// }

// const child = new ChildUser('SuperName', 'ChildName');
// console.log(child.getFullName());



// ES6:
// class User2 extends User1 {
//     constructor(firstName, lastName) {
//         super(firstName, lastName);
//     }
// }

// const user2 = new User2 ('Alex', 'Klimenok');
// console.log(user2.getFullName());
// Incapsulation:

// Polimorfism:

// Abstraction:

// [[Prototype]]:

// Work with String.prototype:
// String.prototype.reverse = function() {
//     return this.split('').reverse().join('');
// }
// console.log('Test'.reverse());
