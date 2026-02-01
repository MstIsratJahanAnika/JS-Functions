function vatKhao() {
    console.log('hand wash koro');
    console.log('table a bosho');
    console.log('khabar plate a nao');
    console.log('aste dhire khao');
}

//function call
// vatKhao();

//function -2
//finding a number's square

//should find square of different numbers each time 
/**
 * 4*4 -> 16
 * 5*5 -> 25
 * 11*11 -> 121
 * 15*15 -> 225
 */
function square(number /*parameter*/) {
    console.log(number);
    console.log('value of the number parameter', number);
    const borgo = number*number;
    console.log('square of given number is ', borgo);
    console.log('----------------------------');
}

//call 
square(4);
square(10);
square(9);
square(22);

//another function 
function add(num1, num2){
    const sum = num1 + num2;
    console.log(sum);
}

add(5, 2);
add(10, 20);
add(9, 90);
// parameter == argument ( must )

//another function 
function mul_sum(a, b, c, d, e)
{
    total = a+ b+ c+ d+ e
    console.log(total);
}

mul_sum(1, 2, 4, 3, 6);