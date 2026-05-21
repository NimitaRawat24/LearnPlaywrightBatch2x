//Assignment operators
let x = 10;
x = 5;
x = 90;
console.log(x);

//Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation

//Comparison Operators
console.log(a == b); // Equal to
console.log(a != b); // Not equal to
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to

//Logical Operators
let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse); // Logical AND
console.log(isTrue || isFalse); // Logical OR
console.log(!isTrue); // Logical NOT

//Compound Assignment Operators
let c = 10;
c += 5; // Equivalent to c = c + 5
console.log(c);
c -= 3; // Equivalent to c = c - 3
console.log(c);
c *= 2; // Equivalent to c = c * 2
console.log(c);
c /= 4; // Equivalent to c = c / 4
console.log(c);
c %= 3; // Equivalent to c = c % 3
console.log(c);
c **= 2; // Equivalent to c = c ** 2
console.log(c);

//Comparison Operators with Type Coercion
console.log(5 == '5'); // true (loose equality, type coercion)
console.log(5 === '5'); // false (strict equality, no type coercion)
console.log(0 == false); // true (loose equality, type coercion)
console.log(0 === false); // false (strict equality, no type coercion)
console.log(null == undefined); // true (loose equality, type coercion)
console.log(null === undefined); // false (strict equality, no type coercion)


