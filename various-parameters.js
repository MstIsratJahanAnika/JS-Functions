//tell if the string has even number of characters or not

function evenSizedString(str){
    const size = str.length; 
    console.log(str, size); //prints both string and it's size
    if(size%2 === 0)
    {
        console.log('even number of characters');
        return true;
    }
    else{
        console.log('odd number of characters');
        return false;
    }
}

evenSizedString('dhaka');
evenSizedString('hamilton'); 

//function to return doubled value 
function doDoubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number*2;
        return result;
    }
    else{
        const result = number*3;
        return result;
    }
}

console.log(doDoubleOrTriple(5, true));
console.log(doDoubleOrTriple(7, false));

//array in function 
function arrayOfNumbers(number){
    const len = number.length;
    return len;
}

console.log(arrayOfNumbers([12, 24, 89, 9, 890, 5532, 22, 1]));
//size = 8, number of elements 