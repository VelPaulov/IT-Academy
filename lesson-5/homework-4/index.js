const str = prompt('Enter a word', 'КаЖдЫй ОхОтНиК');

const changeRegister = (string) => {
    return string
    .split("")
    .map((item) => {
        if (item === item.toUpperCase()) {
            return item.toLowerCase();
        }
        return item.toUpperCase();
    })
    .join("")
    .split();
}

const result = changeRegister(str);
console.log(result);
