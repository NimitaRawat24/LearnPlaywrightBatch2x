//Problem 1: Given an HTTP status code, print which category it belongs to.
/*200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid*/

let statusCode = 404;
if (statusCode >= 200 && statusCode <= 299)
    console.log("Success");
else if (statusCode >= 300 && statusCode <= 399)
    console.log("Redirection");
else if (statusCode >= 400 && statusCode <= 499)
    console.log("Client Error");
else if (statusCode >= 500 && statusCode <= 599)
    console.log("Server Error");
else console.log("Invalid");

//Problem 2: Compare actual result with expected result and print test verdict.
/*Sample Input/Output:

expected = "Login Successful"
actual   = "Login Successful"
Output: ✅ Test Passed

expected = "Login Successful"
actual   = "Invalid Credentials"
Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials */

let expected = "Login Successful";
let actual = "Invalid Credentials";
if (expected === actual) {
    console.log("✅ Test Passed");
} else {
    console.log(`❌ Test Failed — Expected: ${expected}, Got: ${actual}`);
}

/*Program 3: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score */

let impactScore = 10;
if (impactScore >= 9)
    console.log("Critical (block release)");
else if (impactScore >= 7)
    console.log("High");
else if (impactScore >= 4)
    console.log("Medium");
else if (impactScore >= 1)
    console.log("Low");
else console.log("Invalid Score");

/*Program 4: Question 4 — Build Health Reporter. Given the percentage of test cases passed in a CI build, report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)

Sample Input/Output:

Input: 95
Output: 🟡 Stable — Investigate failures

Input: 65
Output: 🔴 Broken Build — Block deployment */

let percentageOfTCPassed = 32;
if (percentageOfTCPassed === 100)
    console.log("🟢 Stable");
else if (percentageOfTCPassed >= 90)
    console.log("🟡 Stable — Investigate failures");
else if (percentageOfTCPassed >= 70)
    console.log("Unstable");
else if (percentageOfTCPassed < 70)
    console.log("🔴 Broken Build — Block deployment");

/* Problem 5 — Login Lockout After Failed Attempts
Problem: Track failed login attempts. Lock the account after 3 failed attempts.

Sample Input/Output:

Input: attempts = 2
Output: 1 attempt left before lockout

Input: attempts = 3
Output: 🔒 Account Locked — Contact support

Input: attempts = 0
Output: Login successful */

let loginAttempt = 2;
if (loginAttempt === 0)
    console.log("Login successful");
else if (loginAttempt === 1)
    console.log("2 attempt left before lockout");
else if (loginAttempt === 2)
    console.log("1 attempt left before lockout");
else if (loginAttempt === 3)
    console.log("🔒 Account Locked — Contact support");