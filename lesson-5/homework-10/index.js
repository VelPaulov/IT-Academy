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

const propertyValue = (array, key) => array
    .map((item) => item[key])
    .join(', ');

const result1 = propertyValue(litmir, 'title');
console.log(result1);

const result2 = propertyValue(litmir, 'author');
console.log(result2);
