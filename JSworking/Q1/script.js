//Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. call the function before it is declared to demonstrate hoisting

var a = 10;
var b = 20;
add();
function add(){
    var c = a+b;
    console.log(c);
}
