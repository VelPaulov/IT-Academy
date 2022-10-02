const countIdentic1 = (array) => {
    let check = [];
    let res = array.reduce((acc, item) => {
        if (check.includes(item)) {
            acc += 1;
        } else {
            check.push(item);
        }
        return acc;
    }, 0);
        
    return res;
};

const countIdentic2 = (array) => {
    return array.reduce((acc, item, index) => {
        acc += (item === array[index + 1]) ? 1 : 0;
        return acc;
    }, 0);
};


console.log(countIdentic1([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]));
console.log(countIdentic1([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9]));
console.log(countIdentic2([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]));
console.log(countIdentic2([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9]));
