/**
 * create a function that will return only even numbers
 * return the sum of even numbers
 */


function sumOfEvenNumbers(numbers){
    let sum = 0;
    let evens = [];
    for(number of numbers){
        if(number%2 === 0){
            sum += number;
            evens.push(number);

            console.log('the even numbers are', number);
        }
    }
    console.log('even number array is', evens);
    return sum;
}

const arr = [43, 55, 32, 56, 70, 89, 22, 34];
const sumOfEven = sumOfEvenNumbers(arr);
console.log('sum of even numbers is', sumOfEven);