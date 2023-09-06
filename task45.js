const numbers = [12, 25, 8, 17, 30, 5];


function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


function calculateAverage(arr) {
    return sum / arr.length;
}


const sum = calculateSum(numbers);
const average = calculateAverage(numbers);

console.log("Sum:", sum);
console.log("Average:", average);


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > average) {
        console.log(numbers[i] + " is above average.");
    } else if (numbers[i] < average) {
        console.log(numbers[i] + " is below average.");
    } else {
        console.log(numbers[i] + " is equal to the average.");
    }
}