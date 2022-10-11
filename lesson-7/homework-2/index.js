// ES 5:
function MyString1() {
    this.reverse = string => string
    .split('')
    .reverse()
    .join('');

    this.ucFirst = string => {
        string.trim();
        return string[0].toUpperCase() + string.slice(1);
    }

    this.ucWords = string => string
    .split(' ')
    .map(item => item[0].toUpperCase() + item.slice(1))
    .join(' ');
}

const string1 = new MyString1();

console.log(string1.reverse('abcde'));
console.log(string1.ucFirst('abcde'));
console.log(string1.ucWords('abcde abcde abcde'));

// ES 6:
class MyString2 {
    reverse(string) {
        return string
        .split('')
        .reverse()
        .join('');
    }
    ucFirst(string) {
        string.trim();
        return string[0].toUpperCase() + string.slice(1);
    }
    ucWords(string) {
        return string
        .split(' ')
        .map(item => item[0].toUpperCase() + item.slice(1))
        .join(' ');
    }
}

const string2 = new MyString2();

console.log(string2.reverse('abcde'));
console.log(string2.ucFirst('abcde'));
console.log(string2.ucWords('abcde abcde abcde'));
