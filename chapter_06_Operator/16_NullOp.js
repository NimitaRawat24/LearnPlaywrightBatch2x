console.log(null == 0); // Output: false
console.log(null == undefined);
console.log(null === undefined);
console.log(null <= 0);
console.log(null >= 0);
console.log(null < 0);
console.log(null > 0);

//nullish coalescing operator
let userInput = null;
let defaultValue = "Default Value";
let result = userInput ?? defaultValue;
console.log(result); // Output: "Default Value"
