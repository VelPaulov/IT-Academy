const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

const arrayClone = (arr) => [...arr]

const arr1 = arrayClone(vegetables);

console.log(arr1);
console.log(vegetables);
