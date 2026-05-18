var a = 10 // global scope
var a = 30 // reassigning the value of a
function abc() {
    var a = 20 // local scope
    console.log(a)
    if (true) {
        var a = 40 // this will affect the value of a in the function scope
        console.log(a) // 40
    }
    console.log(a) // 40, because var is function scoped, not block scoped
}
abc()
console.log(a)