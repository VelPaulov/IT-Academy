const str = prompt('Enter a word', 'КаЖдЫй ОхОтНиК');

const changeRegister = (string) => {
    let array = string.split('');

    let res = array.map((item) => {

        if (item === item.toUpperCase()) {
            return item.toLowerCase();
        }
        return item.toUpperCase();

    });

    return res.join('').split();
}

const result = changeRegister(str);
console.log(result);
