let a = 10; // global scope
//let a = 30; // SyntaxError: Identifier 'a' has already been declared
function abc() {
    let a = 20; // local scope
    console.log(a);
    if (true) {
        let a = 40;
        console.log(a);
    }
    console.log(a);
}
abc()
console.log(a); // 10, because let is block scoped