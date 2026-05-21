let username = 'Alice';
let greeting = `Hello, ${username}! Welcome to template literals.`;
let greeting1 = `Hello, World! ${username}.`;

console.log(greeting);  // Hello, Alice! Welcome to template literals.
console.log(greeting1); // Hello, World! Alice!     

// Multi-line string with template literals
let multiLine = `This is a multi-line string.
It can span multiple lines without needing escape characters.       
This is the third line.`;
console.log(multiLine);

//Real-time example
let env = "Staging";
env = "Production";
const userId = 12345;
const apiUrl = `https://${env.toLowerCase()}.example.com/api/users/${userId}`;
console.log(apiUrl);

