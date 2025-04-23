
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// Example usage:
const fullName = getFullName("Kojo", "Pinto");
console.log(fullName); 

function calculateMean(numbers) {
    // Sum of all numbers
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    // Calculate the mean 
    const mean = sum / numbers.length;

    return mean;
}


const numbers = [10, 20, 30, 40, 50];
const meanValue = calculateMean(numbers);
console.log(meanValue); 