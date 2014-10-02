var letterCount = function (str) {

    str = str.toLowerCase();

    var word = str.split("");
    var counts = {};

    for (var i = 0; i < word.length; i++) {
        var letter = word[i];
        if(typeof(counts[letter]) === 'undefined' ){
            counts[letter] = 0;
        }
        counts[letter]++;
    }
    return counts;
}

console.log("apple", letterCount("apple"));
console.log("pizza", letterCount("pizza"));
console.log("lulls", letterCount("lulls"));
console.log("freebird", letterCount("freebird"));
