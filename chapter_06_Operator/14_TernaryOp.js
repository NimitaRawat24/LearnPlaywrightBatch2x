let raj_age = 18;
let can_vote = raj_age >= 18 ? "Yes, Raj can vote." : "No, Raj cannot vote.";
console.log(can_vote);

let actualStatusCode = 200;
let expectedStatusCode = 200;
let statusMessage = actualStatusCode === expectedStatusCode ? "✅ Success" : "❌ Failure";
console.log(statusMessage);

let baseUrl = "staging";
let apiUrl = baseUrl === "production" ? "https://api.production.com" : "https://api.staging.com";
console.log(`API URL: ${apiUrl}`);
console.log(apiUrl);

let responseTime = 120; // in milliseconds
let performanceStatus = responseTime < 100 ? "Good" : responseTime < 200 ? "Average" : "Poor";
console.log(`Performance Status: ${responseTime} ms - ${performanceStatus}`);

let age_person = 20;
let have_drink = (age_person >= 21) ? (age_person > 23) ? "Yes, can have a drink." : "No, cannot have a drink." : "No, GOA.";
console.log(have_drink);

//maximum of 2 numbers
let num1 = 10;
let num2 = 20;
let max = (num1 > num2) ? num1 : num2;
console.log(`Maximum number is: ${max}`);

//maximum of 3 numbers
let a = 5;
let b = 15;
let c = 10;
let max_of_three = (a > b && a > c) ? a : (b > c) ? b : c;
console.log(`Maximum of three numbers is: ${max_of_three}`);
