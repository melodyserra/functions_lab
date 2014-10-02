var prime = function (n) {
    if (n <= 1) {
        return false;
    } else {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log("false: " + prime(-1));
console.log("false: " + prime(0));
console.log("false: " + prime(1));
console.log("true:  " + prime(2));
console.log("true:  " + prime(3));
console.log("false: " + prime(4));
console.log("true:  " + prime(5));
console.log("false: " + prime(6));
console.log("true:  " + prime(7));
console.log("false: " + prime(8));
console.log("false: " + prime(9));
console.log("false: " + prime(10));
console.log("true:  " + prime(11));
console.log("false: " + prime(12));
console.log("true:  " + prime(13));
console.log("true:  " + prime(17));
console.log("true:  " + prime(19));
console.log("true:  " + prime(23));
console.log("true:  " + prime(29));

