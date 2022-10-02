// import "../lesson-5/homework-10/index.js"
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

// Methods of array:
// sort(); => sortArray (default: String)
// splice(start, deleteCount, item1, item2 ... itemN,); => spliceArray
// indexOf(el); => index
// lastIndexOf(el) => index on the right
// includes(el); => boolean
// find((item, index, array) => {}); => item
// findIndex((item, index, array) => {}); => index
// arr1.concat(arr2); => new concat array
// const arr = [...arr1, ...arr2]; => new concat array
// join(''); => str from array with '' between items

// forEach():

// let array = [2, 3, 4, 5, 6];
// forEach(array, (item, index, array) => {
//     console.log(item);
// })

//map():
// const res = commentList.map((item, index, array) => {
//     return {
//         id: item.id
//     };
// })

// filter();
// reduce(): 
// const res = array.reduce((acc, item, index, array) => {
//     return acc += item;
// }, default)

//some((callback => true)) => true
//every((callback => false)) => false

// Array.from();
// Array.isArray();

// sort - reverse - splice

// #1:
// let arr1 = [2, 3, 4, undefined, null, "", false, 5, 6];

// let compact = (array) => {
//     return array.filter((item, index, array) => item);
// }

// console.log(compact(arr1));


// #2:
// let array = [1, 2, 3, 4, 5];

// let sumInput = (arr) => {
    //     const res = arr.reduce((acc, item) => acc += item, 0);
    //     return res;
    // }
    
    // console.log(sumInput(array));
    
// #4:
    
// let array = [1, 2, 3, 4, 5];

// let func = (arr) => arr.reverse();

// console.log(func(array));

// #5:
// const filter = (callback(item) => array[item]) => {
//     if (array[item]) {
//         true;
//     }
// }

// #6: 
// const forEach = (array, callback) => {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i], i, array) {}
//     }
// };