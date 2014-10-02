var add = function (num1, num2) {
    return num1 + num2;
};

var sub = function (num1, num2) {
    return num1 - num2;
};

var combine = function (num1, num2, bool) {
    if (bool) {
        return add(num1, num2);
    } else {
        return sub(num1,num2);
    }
};

var two = combine(10, 8, false); // subtract 8 from 10
var eighteen = combine(10, 8, true); // add 8 to 10

console.log("two is", two);
console.log("eighteen is", eighteen);
