function add(a,b)
{
result = a + b;
return result;
}

function subtract(a,b)
{
result = a - b;
return result;
}

function multiply(a,b)
{
result = a * b;
return result;
}

function divide(a,b)
{
result = a / b;
return result;
}


var num1 = parseInt(prompt("Enter no."));
var num2 = parseInt(prompt("Enter another no."));
document.write("The answer to " + num1 + " plus " + num2 + " is " + add(num1,num2) + "<br>")
document.write("The answer to " + num1 + " minus " + num2 + " is " + subtract(num1,num2) + "<br>")
document.write("The answer to " + num1 + " times " + num2 + " is " + multiply(num1,num2) + "<br>")
document.write("The answer to " + num1 + " divided by " + num2 + " is " + divide(num1,num2) + "<br>")