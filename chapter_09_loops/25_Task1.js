//Task1: Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.
let x = 10, y = 12, z = 14;
if (x === y && y === z)
    console.log("Euiqilateral Triangle");
else if (x === y || x === z || y === z)
    console.log("Isoceles Triangle");
else
    console.log("Scalene Triangle");