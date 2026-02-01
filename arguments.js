function doubleIt(num){
    const double = num*2;
    console.log(double);
}
console.log('I will call the function');
doubleIt(3);
console.log('--------------------');
doubleIt(6);
console.log('--------------------');
doubleIt(9);
console.log('--------------------');

function difference(num1, num2){
    const difference = num1 - num2;
    console.log(num1, num2, 'the difference is', difference);
}

difference(34, 23);

const fatherAge = 40;
const childAge = 10;
difference(fatherAge, childAge);