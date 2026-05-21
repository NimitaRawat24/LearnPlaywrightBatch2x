// 08_null_undefined.js
// Examples illustrating the difference between null and undefined in JavaScript

// 1) undefined: variable declared but not assigned
let a;
console.log('a (declared, no value) ->', a); // undefined

// 2) undefined: accessing missing object property
const obj = {};
console.log('obj.missing ->', obj.missing); // undefined

// 3) undefined: function with no return (implicitly returns undefined)
function noReturn() { }
console.log('noReturn() ->', noReturn()); // undefined

// 4) null: explicit absence of any object value (developer-assigned)
let b = null;
console.log('b (explicit null) ->', b); // null

// 5) typeof behavior
console.log('typeof undefined ->', typeof undefined); // "undefined"
console.log('typeof null ->', typeof null); // "object" (historical JS quirk)

// 6) Equality comparisons
console.log('null == undefined ->', null == undefined); // true (loose equality)
console.log('null === undefined ->', null === undefined); // false (strict equality)

// 7) Nullish coalescing treats both null and undefined as "nullish"
const val1 = null ?? 'default';
const val2 = undefined ?? 'default';
console.log('null ?? "default" ->', val1); // 'default'
console.log('undefined ?? "default" ->', val2); // 'default'

// 8) When to use which:
// - Use `undefined` when a value is simply missing or not provided (commonly from JS runtime).
// - Use `null` when you want to intentionally indicate "no value" or clear a variable.

// Quick summary output
console.log('\nSummary:');
console.log('- undefined: uninitialized, absent, or not present (runtime)');
console.log('- null: explicit, intentional absence of value (developer)');

let c;
console.log(c);
console.log(typeof c);

let d = null;
console.log(d);
console.log(typeof d);