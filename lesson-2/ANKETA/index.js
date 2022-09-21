let isValidResult;

while (!isValidResult) {

    let lastName = prompt('Enter your last name:');
    let firstName = prompt('Enter your first name:');
    let middleName = prompt('Enter your middle name:');
    let age = +prompt('How are you old?');
    let isGender = confirm('Is your gender male?');

    let gender = (isGender) ? 'Male' : 'Female';
    let isRetired = (gender === 'Male') ? age > 62 : age > 57;
    let retired = (isRetired) ? 'yes' : 'no';

    isValidResult = !(+firstName) &&
                    !(+lastName) &&
                    !(+middleName) &&
                    age &&
                    age > 0 &&
                    age !== Infinity;

    if (isValidResult) {
        alert(`Your full name: ${lastName} ${firstName} ${middleName}
                Your age in years: ${age}
                Your age im days: ${age * 365}
                In 5 years you will be: ${age + 5}
                Your gender: ${gender}
                Are you retired: ${retired}`
            );
    }
}
