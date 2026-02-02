function tenTimes(number)
{
    const result = number*10;
    return result;
}

function cutHalf(number)
{
    const half = number/2;
    return half;
}

tenTimes(5); //not received - nothing changeable 

const output = tenTimes(3);
console.log('output', output);

const bigNumber = tenTimes(99);
console.log(bigNumber);

//return topic ends 




function getMenu() {
 console.log("Burger, Pizza, Pasta");
}

getMenu();


for (var i = 0; i < 5; i++) {
 	 setTimeout(function () {
 	console.log(i);
  }, 100);
}