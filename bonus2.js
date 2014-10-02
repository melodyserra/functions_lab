var merge = function (one, two) {
    var combined = [];
    while (one.length > 0 && two.length > 0) {
        var smaller = one[0] < two[0] ? one : two;
        combined.push(smaller.shift());
    }
    return combined.concat(one, two);
};

console.log(merge([-1,0,5,17], [1,2,3,4,5,7]));
