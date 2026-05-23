if ("hello") console.log("String is truthy");
if (42) console.log("Number is truthy");
if ({}) console.log("Object is truthy");
if ([]) console.log("Array is truthy");

if (0) console.log("This will not be printed");
if ("") console.log("This will not be printed");
if (null) console.log("This will not be printed");
if (undefined) console.log("This will not be printed");
if (NaN) console.log("This will not be printed");

let name = undefined;
if (name) {
    console.log("Hi!!!");
} else {
    console.log("Bye!!!");
}