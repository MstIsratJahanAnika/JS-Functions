/* objective: a function to calculate the sum of all elements in array and return it 
* steps:
* 1. declare function
* 2. check if the function is called properly called
* 3. pass the parameter(s)
* 4. check if the parameter(s) is passed in proper format  
*/


//this is the function
function sumOfNumbers(numbers){

    let sum = 0;
    for(number of numbers){
        console.log(number);//find individual numbers
        sum += number;
    }

    return sum;
}

const numbs = [12, 45, 22, 56, 74, 36];
const sum = sumOfNumbers(numbs);
console.log('sum of number is', sum); // shows undefined - as noting is return from the function 