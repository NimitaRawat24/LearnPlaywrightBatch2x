console.log(typeof 42); // Output: "number"
console.log(typeof "Hello, World!"); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object" (this is a quirk in JavaScript)
console.log(typeof { name: "Alice", age: 30 }); // Output: "object"
console.log(typeof [1, 2, 3]); // Output: "object" (arrays are a type of object in JavaScript)
console.log(typeof function () { }); // Output: "function"
console.log(typeof Symbol("id")); // Output: "symbol"   
console.log(typeof BigInt(12345678901234567890)); // Output: "bigint"
console.log(typeof NaN); // Output: "number" (NaN is considered a number in JavaScript)
console.log(typeof Infinity); // Output: "number" (Infinity is also considered a number in JavaScript)
console.log(typeof -Infinity); // Output: "number" (negative Infinity is also considered a number in JavaScript)
console.log(typeof new Date()); // Output: "object" (Date is a built-in object in JavaScript)
console.log(typeof /abc/); // Output: "object" (regular expressions are also considered objects in JavaScript)  
console.log(typeof Math); // Output: "object" (Math is a built-in object in JavaScript)
console.log(typeof JSON); // Output: "object" (JSON is a built-in object in JavaScript)
console.log(typeof console); // Output: "object" (console is a built-in object in JavaScript)   
console.log(typeof Symbol.iterator); // Output: "symbol" (Symbol.iterator is a well-known symbol in JavaScript)
console.log(typeof Symbol.toStringTag); // Output: "symbol" (Symbol.toStringTag is also a well-known symbol in JavaScript)  
