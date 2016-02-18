/**
 * Created by bo on 2/18/16.
 */
"use strict";


//The Constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}


//Creating instances
var car1 = new Car("Volvo", "V70", 2005);
var car2 = new Car("Volvo", "244", 1988);


// print properties
Object.keys(car1).forEach(function(key) {
    console.log(key,car1[key]);
});

// make a function that can print properties
function printCarFunc() {
    console.log("maker: " + this.make + " ,model: " + this.model + " ,year: " +this.year );
}
// attach function to Car Object
Car.prototype.printCar = printCarFunc;

// print properties with new printCarFunction;
car1.printCar();


// delete a property from car 2 and print the result
delete car2.make;
// print properties
Object.keys(car2).forEach(function(key) {
    console.log(key,car2[key]);
});


