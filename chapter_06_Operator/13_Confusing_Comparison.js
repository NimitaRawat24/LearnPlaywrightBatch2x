// Confusing comparison examples in JavaScript

// Loose equality (==) allows type coercion
console.log(5 == '5');          // true: string '5' coerced to number 5
console.log(0 == false);        // true: false coerced to 0
console.log('' == 0);           // true: empty string coerced to 0
console.log(null == undefined); // true: special case in loose equality
console.log('' == 0);      // true: whitespace-only string coerced to 0

// Strict equality (===) does not allow type coercion
console.log(5 === '5');          // false: different types
console.log(0 === false);        // false: number vs boolean
console.log('' === 0);           // false: string vs number
console.log(null === undefined); // false: different types
console.log('' === 0);      // false: string vs number

// Additional confusing cases
console.log([] == '');        // true: [] becomes '' when coerced to primitive
//console.log([] === '');       // false: different types
console.log([1] == '1');      // true: [1] becomes '1'
//console.log([1] === '1');     // false: different types
console.log([1, 2] == '1,2');  // true: [1,2] becomes '1,2'
console.log([] == ![]);        // true: ![] is false, [] coerces to '', '' coerces to 0, false coerces to 0, so 0 == 0

console.log({} == '[object Object]'); // false: object to string conversion not applied for plain object in loose equality
console.log(false == 'false');        // false: 'false' is not coerced to boolean false

// Some surprising loose equality behavior
console.log(null == 0);   // false: null only equals undefined
console.log(undefined == 0); // false: undefined only equals null
console.log(NaN == NaN);  // false: NaN is not equal to anything, even itself
console.log(NaN === NaN); // false

// Best practice: use strict equality (===) unless you explicitly want coercion

//Extra
console.log(null >= 0); // true: null is coerced to 0, so 0 >= 0 is true
console.log(null > 0);  // false: null is coerced to 0, so 0 > 0 is false
console.log(undefined >= 0); // false: undefined is coerced to NaN, and any comparison with NaN is false
console.log(undefined > 0);  // false: undefined is coerced to NaN, and any comparison with NaN is false    
console.log(undefined < 0);  // false: undefined is coerced to NaN, and any comparison with NaN is false    
console.log(null == 0 || null < 0); // false
console.log(undefined == 0 || undefined < 0); // false: undefined == 0 is false, and undefined < 0 is also false, so overall expression is false
console.log(null == 0 || null > 0); // false: but null >= 0 is true
console.log(undefined == 0 || undefined > 0); // false: undefined == 0 is false, and undefined > 0 is also false, so overall expression is false

// ===== CHEAT SHEET: == vs === =====

/*
LOOSE EQUALITY (==) - Type Coercion Allowed:
✓ 0 == false          → true (0 coerced from boolean)
✓ 1 == true           → true (1 coerced from boolean)
✓ '5' == 5            → true (string coerced to number)
✓ '' == 0             → true (string coerced to number)
✓ null == undefined   → true (special case)
✓ null >= 0           → true (null coerced to 0)
✗ null > 0            → false
✗ NaN == NaN          → false (NaN never equals anything)
✗ [] == false         → true ([] becomes '', then 0)

STRICT EQUALITY (===) - No Type Coercion:
✗ 0 === false         → false (different types)
✗ 1 === true          → false (different types)
✗ '5' === 5           → false (different types)
✗ '' === 0            → false (different types)
✗ null === undefined  → false (different types)
✗ NaN === NaN         → false (NaN never equals anything)
✓ 5 === 5             → true
✓ 'hello' === 'hello' → true
✓ true === true       → true

KEY RULES:
• null == undefined (only case where they're equal)
• null !== 0 (don't confuse with loose equality quirks)
• undefined is different from anything except null
• NaN is unique: NaN !== NaN (use isNaN() or Number.isNaN())
• Empty array [] coerces to empty string '', then to 0
• Strings with whitespace ' ' coerce to 0
console.log([] == ![]);        // true: ![] is false, [] coerces to '', '' coerces to 0, false coerces to 0, so 0 == 0

BEST PRACTICE: Always use === (strict equality) 
               Use == only when you specifically need type coercion
*/