
// Recursion 

function isEven (x) {
    if (x == 0){
        return true
    } else if (x == 1){
        return false
    } else if (x > 0) {
        return isEven(x - 2)
    } else if (x < 0) {
        return isEven(x + 2)
    }
}

console.log(10, isEven(10))
console.log(-10, isEven(-10))
console.log(-1, isEven(-1))
