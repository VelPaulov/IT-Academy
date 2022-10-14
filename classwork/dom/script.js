const table = document.getElementById('age-table');
console.log(table);

const labels = table.getElementsByTagName('label');
console.log(labels);

const age = table.querySelector('td');
console.log(age);

const formName = document.getElementsByName('search')[0];
console.log(formName);

const firstInput = formName.querySelector('input');
console.log(firstInput);

const allInputs = formName.querySelectorAll('input');
const lastInput = allInputs[allInputs.length - 1];
console.log(lastInput);