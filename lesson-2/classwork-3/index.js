let isHundred;

while (!isHundred) {

    let number = prompt('Enter 100:');

    if (number === '100') {
        alert('Great!');
        isHundred = true;
    } else if (number === null) {
        break;
    } else {
        alert('Wrong!');
    }
}
