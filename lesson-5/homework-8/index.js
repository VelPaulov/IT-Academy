let numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

const compareNumbers = (array) => {
    return array.sort((a, b) => {
        return (a > b) ? 1 : (a === b) ? 0 : -1;
    })
}

console.log(compareNumbers(numbers));
