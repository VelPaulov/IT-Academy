let arr = ['php', 'php', 'css', 'css', 'script', 'script', 'html', 'html', 'java'];

const removeDuplicates = (array) => {
    let res = array.filter((item, index) => array.indexOf(item) === index);
    return res;
}

const result = removeDuplicates(arr);
console.log(result);
