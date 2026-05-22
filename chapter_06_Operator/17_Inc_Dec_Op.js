let a = 10;
console.log(a++); // Output: 10 (post-increment, returns the value before incrementing)
console.log(a);   // Output: 11 (the value of a after the post-increment)       

let b = 20;
console.log(++b); // Output: 21 (pre-increment, increments the value before returning it)
console.log(b);   // Output: 21 (the value of b after the pre-increment)    

let c = 30;
console.log(c--);   // Output: 30 (post-decrement, returns the value before decrementing)
console.log(c);     // Output: 29 (the value of c after the post-decrement)

let d = 40;
console.log(--d);   // Output: 39 (pre-decrement, decrements the value before returning it)
console.log(d);     // Output: 39 (the value of d after the pre-decrement)  

let e = 5;
console.log(e++ + ++e - --e + e-- + ++e);
console.log(e);