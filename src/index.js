import "./main.scss";
// console.error('Test');
// const t = 'sdfjmsd';

// const noWroteLetters = 5; const unreadMessages;
// const isRegisterUser = true; isRegistered
// const favoriteGenres = ["drama", "comedy", "triller",];

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let j = 0;

// do {
//     j++;
//     console.log(j);
// } while (j <= 10);

// for (let i = '#'; i.length <= 7; i += "#") {
//     console.log(i);
// }

let result1 = ''

for (let i = 0; i <= 8; i++) {
    if (i % 2 == 0) {
        result1 += '#';
    } else {
        result1 += ' ';
    }
}

console.log(result1);