const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6];

const writeln = (array1, array2) => {
    let res = array1.map((item, index) => item += array2[index] || 0);
    return res;
}

const result = writeln(arr1, arr2);
console.log(result);
