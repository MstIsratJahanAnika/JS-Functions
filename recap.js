function add(price1, price2)
{
    const totalPrice = price1 + price2;
    return totalPrice;
}

//giving the function value and receiving result 
const bill = add(23, 77);
console.log(bill);

//without storing in variable 
function add2(price1, price2)
{
    return price1 + price2;
}

const bill2 = add2(90, 10);
console.log(bill2);

//another function 
function doSomeMath(num1, num2)
{
    const add = num1 + num2;
    const diff = num1 - num2;
    const multi = add * diff;
    // const div = num1/ (num2%3);

    const result= multi/ 2;
    return result;
}

const result = doSomeMath(10, 5);
console.log(result);