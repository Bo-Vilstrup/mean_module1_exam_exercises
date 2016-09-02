/*

    Hoisting
    Variabler og nogle funktioner vil blive hoisted til toppen af deres (funktions) scope.

        Hoisting design regl:
        For at undgå fejl: erklære altid alle variabler i begyndelsen (toppen) af et hvert funktions scope.
 */


/*
    Koden herunder bliver set af compileren på følgende måde pga. hoisting

    var myVar;
    console.log(myVar);
    myVar = "Hello from inside function";
    console.log(myVar);

 */

(function() {
    console.log(myVar);                         // outputs :: undefined
    var myVar = "Hello myVar";
    console.log(myVar);                         // outputs :: Hello myVar
})();

/*
    Et eksempel på at variaber bliver hoisted til toppen af deres funktions scope og ikke til deres block-scope

    Koden herunder bliver set af compileren på følgende måde pga. hoisting:

    var number;
    if(true) {
        number = 3;
    }
    console.log(number);

*/

(function() {

    if(true) {
        var number = 3;
    }
    console.log(number);                // outputs :: 3
})();

/*
    Et eksempel på at Funktionserklæringer bliver hoisted

    Koden herunder bliver set af compileren på følgende måde pga. hoisting:

    function myFunction1() {
        console.log("Hello myFunction1");
    }
    myFunction1();
*/

(function() {

    myFunction1();

    function myFunction1() {
        console.log("Hello myFunction1");        // outputs :: Hello myFunction1
    }
})();

/*
    Et eksempel på at Funktionserklæringer bliver hoisted men ikke tildelingen.

    Koden herunder bliver set af compileren på følgende måde pga. hoisting:

    var myFunction2;
    // myFunction2(); :: <- this will not work!!
    myFunction2 = function() {
        console.log("Hello myFunction2");
    };
    myFunction2();
 */

(function() {

    // myFunction2(); :: <- this will not work!!

    var myFunction2 = function() {
        console.log("Hello myFunction2");       // outputs :: Hello myFunction2
    };
    myFunction2();

})();
