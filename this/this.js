/**
 * Created by bo on 2/16/16.
 */

/*
 Whenever a function is contained in the global scope, the value of this inside of that function will be
 the global object (window in a browser) or undefined if in strict mode
*/

"use strict";
console.log(this);  // {}

function foo()  {
    return this;    // outputs :: the "Object" "window" object in non strict mode and "undefined" in strict mode
}
console.log(foo());

(function() {

    console.log(this);    // outputs :: "undefined"
})();

var a = {
    name :"Bo",
    context : function() {
        return this;
    }
};
console.log(a.context()); // outputs :: Object {name: "Bo", context: [Function]}

console.log("--------------------------------------------------");

/*
 Whenever a function is called by a preceding dot, the object before that dot is this
 */


var person = {
    firstName   :"Penelope",
    lastName    :"Barrymore",
    // Since the "this" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,​
    // "this" will have the value of the person object because the person object will invoke showFullName ()​
    showFullName:function () {
        console.log (this.firstName + " " + this.lastName);
    }
};
person.showFullName ();



console.log("-----------------------------------------------------");

/*
 Whenever a constructor function is used, this refers to the specific instance of the
 object that is created and returned by the constructor function.
 */
