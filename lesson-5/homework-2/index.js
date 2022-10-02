const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

const writeln1 = (array) => {
    const string = array.join(', ');
    return string;
}

const string1 = writeln1(vegetables);
console.log(string1);


const writeln2 = (array) => {
    let string = '';

    array.map((item, index) => {
        return string += (index === 0) ? item : `, ${item}`;
    });

    return string;
}

const string2 = writeln2(vegetables);
console.log(string2);
