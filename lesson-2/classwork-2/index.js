let string1 = '';
let string2 = '';

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 8; j++) {
        if (j % 2 == 0) {
            string1 += '#';
            string2 += ' ';
        } else {
            string1 += ' ';
            string2 += '#';
        }
    }
    console.log(string1);
    console.log(string2);
    
    string1 = '';
    string2 = '';
}
