//Task 1: Write a program that checks if a number is even or odd.
let x = 52
if (x % 2 === 0) {
    console.log("Even");
} else console.log("Odd");

//Task 2: Write a program that checks marks and prints the corresponding grade based on the following criteria:
let marks = 55;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C"); console.warn(1);

} else if (marks >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

//Task 3: leap year checker: multiple of 4, except for years evenly divisible by 100 but not by 400
let year = 1000;
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}