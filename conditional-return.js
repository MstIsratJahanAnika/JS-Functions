function isEven(num){
    if(num%2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(5));
console.log(isEven(110));

function isOdd(number){
    if(number%2 === 1){
        return true;
    }
    return false; //if condition not true - outside the condition block
}


console.log(isOdd(99));
console.log(isOdd(88));