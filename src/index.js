import '../classwork/search/SearchList.js';

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

// window.navigator
// window.screen
// window.location
// window.fetch
// window.history
// localStorage
// SessionStorage
// Events
// 
// https://developer.mozilla.org/ru/docs/Web/Events

// Add event listener:
// const square = document.querySelector('.square');

// square.addEventListener('click', () => {
//     console.log('sdfdsf');
// })

// const clickhandler = () => console.log('sdfdsf');

// square.addEventListener('click', clickhandler);

// delete event listener:
// square.removeEventListener('click', clickhandler);

// Object event:
// const clickhandler = (event) => {
//     console.log(event.target);
//     event.target.style.border = '1px solid green';
// }

// Stop propagation: останавливает всплытие событий
// event.stopPropagation(); останавливает всплытие своих родительских элементов
// event.stopImmediatePropagation(); останавливает событие сразу же после первого события останавливая последующие

// capture: true

// Делигирование:
// плохой подход:
// const links = document.querySelectorAll('a');
// Array.from(links).forEach((item) => {
//     item.addEventListener('slick', (evt) => {
//         evt.preventDefault();
//         console.log(evt.target);
//     })
// })

// Норм подход:
// const ul = document.querySelectorAll('ul');
// Array.from(ul).forEach(() => {
//         item.addEventListener('slick', (evt) => {
//             evt.preventDefault();
//             const target = evt.target.closest();
//             if (target) {
//                 console.log('sdfs');
//             }
//         })
//     })

// Cookie:
// const ms = 10000;
// document.cookie = `it-academy=password; path=/about; max-age=${ms}`;
// console.log(document.cookie);

// LocalStorage:
// window.localStorage.setItem('it-academy', 'dsjaasdas');
// console.log(window.localStorage.getItem('it-academy'));
// window.localStorage.removeItem('it-academy');
// window.localStorage.clear();

// SessionStorage:
// То же, что и локал, но живёт пока сессия не закончится

// Web components:
// class MyButton extends HTMLButtonElement {}
// class Search extends HTMLElement {
//     constructor() {
//         super();
//         this.content = this.getAttribute('content');
//     }

//     connectedCallback() {
//         this.innerHTML = `
//             <div>
//                 <a href='#'>${this.content}</a>
//             </div>
//         `
//     }

//     disconnectedCallback() {

//     }

//     attributeChangedCallback(name, oldValue, newValue) {
//         console.log(name, oldValue, newValue);
//     }

//     static get observedAttributes() {
//         return ['content'];
//     }
// }

// customElements.define('user-search', Search);

// SetTimeout: (повторяется один раз через заданное время)
// setTimeout(() => {
//     console.log('hello');
// }, 2000);

// SetInterval: (повторяется постоянно через заданное время)
// setInterval(() => {
//     console.log('Hello');
// }, 2000);


// document.getElementById('app').innerHTML = `
//     <div class='box'><div>
// `;

// const box = document.querySelector('.box');
// const animateElement = (element, duration, distance) => {
//     const frame = (duration / 1000) * 60;
//     const delta = distance / frame;

//     let currentX = element.getBoundinClientReact().x;
//     const maxX = currentX + distance;

//     const step = () => {
//         currentX += delta;
//         element.style.transform = `translateX(${currentX}px)`;
//         if(currentX < maxX) {
//             requestAnimationFrame(step);
//         }

//     };

//     requestAnimationFrame(step);
// };

// box.addEventListener('click', () => {
//     animateElement(box, 1000, 200);
// });


// const loadImage = (src) => {
//     return new Promise((resolve, reject) => {
//         const image = new Image();
//         image.src = src;
//         image.addEventListener('load', () => {
//             resolve(image);
//         });
//         image.addEventListener('error', () => {
//             reject(new Error('Can not load the file'));
//         });
//     });
// };
// const src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';

// loadImage(src)
//     .then((image) => console.log(image))
//     .catch();

// const load = async () => {
//     try {
//         const data = await loadImage(src);
//     console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// load();