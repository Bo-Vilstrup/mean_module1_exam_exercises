/**
 * Created by bo on 2/16/16.
 */

// Hoisting
    // variables and some functions will be hoisted to the top of their (function) scope.

var myVar = "hello world";

(function() {
    console.log(myVar); // outputs :: hello world
})();

(function() {
    // var myVar; :: the declaration of the local myVar is hoisted to this point and is not defined yet
    console.log(myVar); // outputs :: undefined

    var myVar = "Hello from inside function"; // now myVar is defined
})();

(function() {
    var myVar = "Hello from inside function"; // now myVar is defined (initialized) and declared
    console.log(myVar); // outputs :: Hello from inside function

})();


console.log("-------------------------------------------------");

(function() {
    // var number;

    for(var i = 0; i < 3; i++) {
        var number = 3;             // variables is hoisted to the top of its function scope
    }
    console.log(number); // outputs :: 3

})();

console.log("----------------------------------------------------");

(function() {

    myFunction();
    // function declarations is hoisted
    function myFunction() {
        console.log("Hello from inside function"); // outputs :: Hello for inside function
    }
})();

(function() {

    // myFunction(); :: <- this will not work!!

    // function expression is not hoisted
    var myFunction = function() {
        console.log("Hello from inside function"); // outputs :: Hello from inside function
    };
    myFunction();

})();
