const litmir = [
    {
        author: 'Хэленка',
        title: 'Улетела сказка',
    },
    {
        author: 'Коул Кресли',
        title: 'Восстание Аркан',
    },
    {
        author: 'Райчел Мид',
        title: 'Золотая лилия',
    },
];

const propertyValue = (array, key) => {
    let res = array.map((item) => {
        return item[key];
    });
    return res.join(', ');
}

const result1 = propertyValue(litmir, 'title');
console.log(result1);

const result2 = propertyValue(litmir, 'author');
console.log(result2);
