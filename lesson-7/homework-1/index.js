// ES 5:
function Worker1(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
}

const getSalary = function() {
    return this.rate * this.days;
}

const worker1 = new Worker1('Иван', 'Иванов', 10, 31);
console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);

worker1.getSalary = getSalary;

console.log(worker1.getSalary());


// ES 6:
class Worker2 {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}

const worker2 = new Worker2('Иван', 'Иванов', 10, 31);

console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.rate);
console.log(worker2.days);
console.log(worker2.getSalary());
