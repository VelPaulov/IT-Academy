import { array } from '../modules/module1.js';
import { array1 } from '../modules/module1.js';
import { array2 } from '../modules/module1.js';

array.forEach(item => console.log(`${item}!`));

console.log(array1);

console.log(array2.indexOf(array2.at(-1)));