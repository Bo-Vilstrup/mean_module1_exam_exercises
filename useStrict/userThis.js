/**
 * Created by bo on 2/16/16.
 */

/*
"use strict"

Strict mode is declared by adding "use strict"; to the beginning of a JavaScript or a JavaScript function.
Declared at the beginning of a JavaScript file, it has global scope (all code will execute in strict mode):

 With strict mode, you can not, for example, use undeclared variables.
*/

// allowed because we are in non "use strict" mode

//"use strict";
x = 1.7;            // x is not declared (var x = 1.7;)
console.log(x);


// now in "use strict" mode (have to declare y before initializing y)
(function() {
    "use strict";

    var y = 1.7;    // x is declared
    console.log(y);
})();

