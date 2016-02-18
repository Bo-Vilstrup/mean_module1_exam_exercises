/**
 * Created by bo on 2/17/16.
 */
"use strict";

/*
 Closures are functions that refer to independent (free) variables. In other words,
 the function defined in the closure 'remembers' the environment in which it was created.
 */

function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc(); // outputs :: Mozilla

/*
 In essence, makeAdder is a function factory — it creates functions which can add a specific value to their argument.
 In the above example we use our function factory to create two new functions — one that adds 5 to its argument,
 and one that adds 10.
 */

function makeAdder(x) {

    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // outputs :: 7
console.log(add10(2)); // outputs :: 12


/*
 Emulating private methods with closures

    Here's how to define some public functions that can access private functions and variables,
    using closures which is also known as the "module pattern":

 module pattern
 */


var counter = (function() {

    var privateCounter = 0;

    // Object to return ->
    return {

        increment: function () {
            privateCounter++;
        },
        decrement: function () {
            privateCounter--;
        },
        value: function () {
            return privateCounter;
        }
    }; // End of return
})();



console.log(counter.value()); // logs 0

counter.increment();
counter.increment();

console.log(counter.value()); // logs 2

counter.decrement();

console.log(counter.value()); // logs 1


/*

another way of doing the module pattern is:
 */

// this is a singleton */
var module = (function() {

    var privateCounter = 0;

    var increment       = function() { privateCounter++; };
    var decrement       = function() { privateCounter--; };
    var value           = function() { return privateCounter; };

    var privateFunction = function() {/* A private function */ };

    // public API (Object) is returned ->
    return {
        increment:  increment,
        decrement:  decrement,
        value:      value
    }; // End of return

})();

console.log(module.value()); // logs 0

module.increment();
module.increment();

console.log(module.value()); // logs 2

module.decrement();

console.log(module.value()); //logs 1







