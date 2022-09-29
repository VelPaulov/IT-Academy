import "../lesson-4/TREESUM/index.js"
// Recursion:
// let sumTo = (n) => {
//     if(n === 1) return 1;
//     return n + sumTo(n - 1);
// }
// let result = sumTo(7);
// console.log(result);

// let sum = 7;
// let result = 0;
// for (let i = sum; i !== 0; i--) {
//     result += i;
// }
// console.log(result);

// Closure:
// let calcSum = (a) => {
//     return (b) => {
//         return a + b;
//     }
// }
// console.log(calcSum(4)(7));

// Recursion-for-thinks:
// const list = {
//     a: 'a',
//     b: 'b',
//     next: {
//         a: 'a-1',
//         b: 'b-1',
//         next: {
//             a: 'a-2',
//             b: 'b-2',
//             next: null, 
//         }
//     }
// }

// const printA = (list) => {
//     list.a = Math.random();
//     if (list.next) return printA(list.next);
//     return;
// }

// printA(list);
// console.log(list);

// const string = 'aaa bbb ccc';
// const halfString = string.indexOf('bbb');


// console.log(string.slice(halfString, halfString + 3));
// console.log(string.substring(halfString, 7));
// console.log(string.substr(halfString, 3));

