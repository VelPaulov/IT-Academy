const numbers = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];

let treeSum = (array) => {
    
    let sum = 0;

    for (let num of array) {
        
        sum += (typeof(num) === 'number') ? num : treeSum(num);
    }
    
    return sum;
}

const result = treeSum(numbers);
console.log(result);
