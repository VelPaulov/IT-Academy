const num = prompt('Enter a number', 55);

const colonOdd = (number) => {
    let arr = number.split('');

    let res = arr.map((item, index, array) => {
        if (!(item % 2 == 0) &&
        !((array[index + 1]) % 2 == 0) &&
        !(index === array.length - 1)) {
            return `${item}:`;
        }
        return item;
    });
    return res.join('');
}

const result = colonOdd(num);
console.log(result);
