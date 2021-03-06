/* Array */
"use strict";
/*How to create an empty Array ?*/
let array;

// same 
array = [];
array = Array();

// set
array[5] = "Hi";

//get
const seventhItem = array[6];

// get the length
const length = array.length;

// add at the end 
array.push("something");

// add at the begining
array.unshift("JS");

// remove the last thing
array.pop();
array.splice(-1); // alternative
array.length += -1; // alternative

// remove the last thing and store it
const removedLastPart = array.pop();
const removedLastPart2 = (array.splice(-1))[0]; // alternative
// alternative
const newLength = array.length - 1;
const removedLastPart3 = array[newLength]; 
array.length = newLength;

// remove the first thing and store it
const removedFirstPart = array.shift();

// remove at a specific position
const specificPosition = 5; // remove the 6th element in the array
array.splice(specificPosition, 1);

// remove a specific item (once)
const itemToBeRemoved = "removeMe";
const specificItemPosition = array.indexOf(itemToBeRemoved);
array.splice(specificItemPosition, 1);
