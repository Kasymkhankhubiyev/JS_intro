// arrays

let listOfNumbers = [1, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// -> 5
console.log(listOfNumbers[0]);
// -> 1

// Methods

let don = "Don"
console.log(typeof don.toUpperCase);
// -> function
console.log(don.toUpperCase());
// -> DON
console.log(don.toLowerCase());
// -> don


let sequence = [1, 2, 3];
sequence.push(4);
console.log(sequence);
// -> [1, 2, 3, 4]
sequence.push(5);
console.log(sequence);
// -> [1, 2, 3, 4, 5]
console.log(sequence.pop());
// -> 5
console.log(sequence);
// -> [1, 2, 3, 4]


// Objects
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// -> false
console.log(day1.wolf);
// -> undefined
day1.wolf = false;
console.log(day1.wolf);
// -> false


let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a Tree"
};
console.log(descriptions.work);
// -> "Went to work"
console.log(descriptions["touched tree"]);
// -> "Touched a Tree"


let anObject = {left: 1, right: 2};
console.log(anObject.left);
// -> 1
delete anObject.left;
console.log(anObject.left);
// -> undefined
console.log("left" in anObject);
// -> false
console.log("right" in anObject);
// -> true
