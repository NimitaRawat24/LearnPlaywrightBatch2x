//var
console.log(greeting);
var greeting = "Hello, World!"; // This will be hoisted to the top of the scope
console.log(greeting); // This will print "Hello, World!" because the variable declaration is hoisted, but the assignment is not.

function getUserStatus() {
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
}

getUserStatus();

//let, const
//console.log(score); //ReferenceError: Cannot access 'score' before initialization
let score = 100;
console.log(score);

if (true) {
    //console.log(score); //ReferenceError: Cannot access 'score' before initialization
    let score = 200;
    console.log(score); // This will print 200
}