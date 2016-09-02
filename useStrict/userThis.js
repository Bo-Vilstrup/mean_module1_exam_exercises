/*
    Man deklarerer Strict mode ved at tilføje ”use strict; I begyndelsen af et JavaScript eller en JavaScript funktion.

    Hvis ”use strict” er erklæret i begyndelsen af en JavaScript-fil, så har erklæringen global rækkevidde (scope)
    (al kode vil blive eksekveret I strict mode.).

    få mere information angående strict mode:
        http://www.w3schools.com/js/js_strict.asp


    En af de vigtigste følger af at bruge ”strict mode” er, at man undgår at ”forurening” det globale scope ved et uheld,
    fordi:
        I ”Strict mode” er det ikke tilladt at bruge ikke-deklareret variabler.
*/



    //"use strict";
/* ***************************************
    g er ikke deklareret,
    så dette er ikke tilladt i "strict mode"
******************************************* */

    g = 1.7;
    console.log("variable g = " + g);

/* ********************************************
    variablen 'str' er ikke deklareret,
    så dette er ikke tilladt i "strict mode".

    i "non strict mode" vil str forurene det
    globale scrope.
 ******************************************* */

    (function() {
        str = "variablen str forurener det globale scope i non-strict mode";
    })();
    console.log(str);

/* ***************************************
    Man deklarerer Strict mode ved at tilføje
    ”use strict; I begyndelsen af et
    JavaScript eller en JavaScript funktion
 ******************************************* */

    (function() {
        "use strict";
        var f = 1.7;
        console.log("variable f = " + f);
    })();



