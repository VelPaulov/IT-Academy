const num = prompt('Enter a number', 55);

const colonOdd = (number) => {
    return number
        .split("")
        .map((item, index, array) => {
            const condition = [item, array[index + 1]].every(
                (item) => item % 2 !== 0
            );
            if (condition && !(index === array.length - 1)) {
                return `${item}:`;
            }
            return item;
        })
        .join("");
};

const result = colonOdd(num);
console.log(result);
