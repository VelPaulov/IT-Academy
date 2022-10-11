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
// const button = document.createElement('button');
// button.classList.add('button');
// button.textContent = 'asdasdas';

// class CreateElement {
//     create(type, attributes, content) {
//         const button = document.createElement(type);
//         Object.entries(attributes).forEach(([key, value]) => {
//             button.setAttribute(key, value);
//         });
//         button.textContent = content;

//         return button;
//     }
// }

// const div = CreateElement.create('div', 'Block', {class: 'container'});


// Work with String.prototype:
// String.prototype.reverse = function() {
//     return this.split('').reverse().join('');
// }
// console.log('Test'.reverse());

// Object.values();

// class User {
//     constructor() {
//         this._name = 'name';
//         this._lastName = 'last name';
//         this._lastName = 'last name';
//         User.counter += 1;
//     }
//     get name() {
//         return this._name;
//     }

//     static counter = 0;

//     set name(value) {
//         if (value.length <= 5) {
//             this._name  =value;
//         } else {
//             console.error('Cann not set property');
//         }
//     }

//     static print() {
//         console.log('asdasd');
//     }
// }

// const user = new User();
// user.name = 'name';

// user.print();

// console.log(User.counter);

// Geters & Seters:
// class User {
//     constructor() {
//         this._name = 'a';
//     }
//     set name(value) {
//         if (value.includes('a')) {
//             this._name = value;
//         } else {
//             console.log('Error');
//         }
//     }
//     get name() {
//         return this._name;
//     }
// }

// const user1 = new User();
// user1.name = 'sdfdsfd';
// console.log(user1.name);

// Destructurisation:
// const array = [213, 129];
// const [id, address] = arr;

// console.log(Object.entries({name: 'Alex'}));


// Global objects:

// Date:
// const data = new Date();

// console.log(data);
// console.log(data.getFullYear());
// console.log(data.getDate());
// console.log(data.getHours());

// moment.js - библиотека, помогает работать с датами

// Math:
// console.log(Math.ceil(4.4)); сокращает вверх
// console.log(Math.floor(4.4)); сокращает вниз
// console.log(Math.round(4.4)); сокращает по математически
// console.log(Math.max(4.4)); найти максимальное число
// console.log(Math.min(4.4)); найти минимальное число

// String
// Number
// Boolean

// Set
// const set = new Set([1,2,3,4,1,2,43,1,5,7]); 
// console.log(set.values()); возвращает уникальные значения

// WeakSet: то же что и Set, но работает с объектами
// Map:
// WeakMap:
//

// DOM:
// getElementById - id
// getElementsByClassName - class
// getElementsByTagName - tag
// getElementsByName - value of atribute 'name'
// querySelector - selector in css
// querySelectorAll - all elements of selector
// closest - search clossest grandparent

