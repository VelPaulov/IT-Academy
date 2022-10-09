class MyString {
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

const string = new MyString();

console.log(string.reverse('abcde'));
console.log(string.ucFirst('abcde'));
console.log(string.ucWords('abcde abcde abcde'));
