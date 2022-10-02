const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

const arrayClone = (arr) => {
    const newArr = [];
    return newArr.concat(arr);
}

const arr1 = arrayClone(vegetables);

console.log(arr1);
console.log(vegetables);
