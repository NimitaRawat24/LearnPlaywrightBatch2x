// Comprehensive JavaScript Identifier Rules File
// This file demonstrates all rules and examples for JavaScript identifiers

console.log("=== JavaScript Identifier Rules ===");
console.log("An identifier is a name used to identify variables, functions, classes, etc.");

// Rule 1: Must start with a letter (A-Z, a-z), underscore (_), or dollar sign ($)
console.log("\n1. Must start with a letter, underscore, or dollar sign");

// Valid examples
let name = "John";           // Starts with letter
let _private = "hidden";      // Starts with underscore
let $price = 99.99;           // Starts with dollar sign

console.log("Valid starting characters:");
console.log("name:", name);
console.log("_private:", _private);
console.log("$price:", $price);

// Invalid examples (commented out to avoid syntax errors)
// let 123invalid = "error";    // Cannot start with digit
// let -negative = "error";     // Cannot start with hyphen

// Rule 2: Cannot start with a digit (0-9)
console.log("\n2. Cannot start with a digit");

// Valid examples (digits after first character)
let item1 = "first item";
let item2 = "second item";
let user123 = "user with numbers";

console.log("Valid with digits after first character:");
console.log("item1:", item1);
console.log("item2:", item2);
console.log("user123:", user123);

// Invalid examples (commented out)
// let 1stPlace = "error";       // Starts with digit
// let 9lives = "error";         // Starts with digit

// Rule 3: After first character, can include letters, digits, underscores, or dollar signs
console.log("\n3. After first character: letters, digits, underscores, dollar signs");

// Valid examples
let userName = "John Doe";        // Letters
let count_123 = 123;              // Underscore and digits
let $priceValue = 49.99;          // Dollar sign and letters
let my_var_1 = "mixed";           // Mixed valid characters

console.log("Valid combinations:");
console.log("userName:", userName);
console.log("count_123:", count_123);
console.log("$priceValue:", $priceValue);
console.log("my_var_1:", my_var_1);

// Invalid examples (commented out)
// let first-name = "error";       // Hyphen not allowed
// let total% = 100;               // Percent not allowed
// let hello world = "error";      // Space not allowed

// Rule 4: Can use Unicode letters and some Unicode characters
console.log("\n4. Unicode letters and characters");

// Valid examples
let π = 3.14159;                  // Greek letter pi
let 你好 = "Hello in Chinese";     // Chinese characters
let über = "German umlaut";        // German umlaut
let café = "French accent";        // Accented character
let 变量 = "Variable in Chinese";  // Chinese word

console.log("Unicode examples:");
console.log("π:", π);
console.log("你好:", 你好);
console.log("über:", über);
console.log("café:", café);
console.log("变量:", 变量);

// Note: Some Unicode characters like emojis cannot be used as identifiers
// let 👍score = 100;             // Emoji not allowed

// Rule 5: Cannot use reserved keywords
console.log("\n5. Cannot use reserved keywords");

// List of reserved keywords in JavaScript
let reservedKeywords = [
    "break", "case", "catch", "class", "const", "continue",
    "debugger", "default", "delete", "do", "else", "export",
    "extends", "finally", "for", "function", "if", "import",
    "in", "instanceof", "new", "return", "super", "switch",
    "this", "throw", "try", "typeof", "var", "void", "while",
    "with", "yield", "let", "static", "public", "private",
    "protected", "await", "async", "enum", "implements",
    "interface", "package", "null", "true", "false"
];

console.log("Reserved keywords that cannot be used as identifiers:");
console.log(reservedKeywords.join(", "));

// Invalid examples (commented out)
// let let = "error";             // Reserved keyword
// let const = "error";           // Reserved keyword
// let function = "error";        // Reserved keyword
// let class = "error";           // Reserved keyword

// Valid alternatives
let letValue = "valid alternative";
let constVal = "another valid name";
let myFunction = function() { return "valid"; };
let MyClass = class { };

console.log("Valid alternatives to reserved keywords:");
console.log("letValue:", letValue);
console.log("constVal:", constVal);
console.log("myFunction():", myFunction());
console.log("MyClass:", typeof MyClass);

// Rule 6: Case-sensitive
console.log("\n6. Case-sensitive");

// Same spelling, different cases are different identifiers
let myVar = "lowercase";
let myvar = "different case";
let MYVAR = "uppercase";

console.log("Case sensitivity examples:");
console.log("myVar:", myVar);
console.log("myvar:", myvar);
console.log("MYVAR:", MYVAR);

// Rule 7: Cannot contain spaces or punctuation like -, +, !, @
console.log("\n7. Cannot contain spaces or punctuation");

// Valid examples (no spaces or punctuation)
let firstName = "John";
let lastName = "Doe";
let full_name = "John Doe";
let totalCost = 100;
let userEmail = "user@example.com";

console.log("Valid without spaces/punctuation:");
console.log("firstName:", firstName);
console.log("lastName:", lastName);
console.log("full_name:", full_name);
console.log("totalCost:", totalCost);
console.log("userEmail:", userEmail);

// Invalid examples (commented out)
// let first name = "error";       // Space not allowed
// let total-cost = 100;           // Hyphen not allowed
// let price+tax = 120;            // Plus not allowed
// let user@name = "error";        // At symbol not allowed
// let hello! = "error";           // Exclamation not allowed

// Additional Examples and Best Practices
console.log("\n=== Additional Examples and Best Practices ===");

// Common naming conventions
let camelCase = "preferred for variables and functions";
let PascalCase = "preferred for classes and constructors";
let snake_case = "sometimes used for constants";
let CONSTANT_VALUE = "uppercase for constants";

console.log("Naming conventions:");
console.log("camelCase:", camelCase);
console.log("PascalCase:", PascalCase);
console.log("snake_case:", snake_case);
console.log("CONSTANT_VALUE:", CONSTANT_VALUE);

// Valid identifier examples
let validExamples = [
    "name", "_private", "$price", "item1", "userName",
    "count_123", "$value", "π", "你好", "über", "café",
    "letValue", "constVal", "myFunction", "MyClass",
    "firstName", "lastName", "full_name", "totalCost"
];

console.log("All valid identifier examples:");
validExamples.forEach(example => {
    console.log("-", example);
});

// Function to validate identifier (conceptual)
function isValidIdentifier(str) {
    // This is a simplified check - real validation is more complex
    if (!str) return false;

    // Check first character
    let firstChar = str.charAt(0);
    if (!/[a-zA-Z_$]/.test(firstChar) && !/\p{L}/u.test(firstChar)) {
        return false;
    }

    // Check remaining characters
    for (let i = 1; i < str.length; i++) {
        let char = str.charAt(i);
        if (!/[a-zA-Z0-9_$]/.test(char) && !/\p{L}|\p{N}/u.test(char)) {
            return false;
        }
    }

    // Check if it's a reserved keyword (simplified)
    let keywords = ["break", "case", "catch", "class", "const", "continue",
                   "debugger", "default", "delete", "do", "else", "export",
                   "extends", "finally", "for", "function", "if", "import",
                   "in", "instanceof", "new", "return", "super", "switch",
                   "this", "throw", "try", "typeof", "var", "void", "while",
                   "with", "yield", "let", "static"];

    return !keywords.includes(str);
}

console.log("\nIdentifier validation examples:");
console.log("isValidIdentifier('name'):", isValidIdentifier('name'));
console.log("isValidIdentifier('_private'):", isValidIdentifier('_private'));
console.log("isValidIdentifier('$price'):", isValidIdentifier('$price'));
console.log("isValidIdentifier('1invalid'):", isValidIdentifier('1invalid'));
console.log("isValidIdentifier('first-name'):", isValidIdentifier('first-name'));
console.log("isValidIdentifier('let'):", isValidIdentifier('let'));

// Summary
console.log("\n=== Summary of JavaScript Identifier Rules ===");
console.log("✓ Must start with letter (A-Z, a-z), underscore (_), or dollar sign ($)");
console.log("✓ Cannot start with digit (0-9)");
console.log("✓ After first character: letters, digits, underscores, dollar signs");
console.log("✓ Can use Unicode letters and characters");
console.log("✓ Cannot use reserved keywords");
console.log("✓ Case-sensitive");
console.log("✓ Cannot contain spaces or punctuation (-, +, !, @, etc.)");
console.log("✓ Follow naming conventions (camelCase, PascalCase, etc.)");

console.log("\nThis file demonstrates all JavaScript identifier rules with examples!");