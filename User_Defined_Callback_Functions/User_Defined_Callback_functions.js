/**
 * Created by bo on 2/18/16.
 */

    "use strict";


var names = ["Bo", "Peter", "Hans", "Anders", "Jackb"];


// 1 filter (boolean) ..................................
function filterFunction(name) {

    return name.length <= 4; // four letters names
};

var filterNames = names.filter(filterFunction);
console.log("filtered names by using javascript own filter method: " + filterNames);


// My filter implementation with prototyping ..........................................
function myFilter2(callBack) {

    var newArray = [];
    for(var i = 0; i < this.length; i++) {

        if(callBack(this[i])) {
            newArray.push(this[i]);
        };
    }
    return newArray;
};
//Now it makes sense, when attached to the Array.prototype
Array.prototype.myFilter2 = myFilter2;


var myfilterNames2 = names.myFilter2(filterFunction);
console.log("filtered by using my own prototype filter method: " + myfilterNames2);



