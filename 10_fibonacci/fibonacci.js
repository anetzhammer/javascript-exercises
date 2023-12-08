// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)

const fibonacci = function(x) {
    if (x == 1 ) return 1;
    if (x < 0 ) return "OOPS";
    let ary = [0,1]
    let sum = 0
    for (let i = 0; i < (x-1); i ++) {
        sum = ary[ary.length-1] + ary[ary.length-2]
        ary.push(sum)
    }
    return sum
}

fibonacci(4)
// Do not edit below this line
module.exports = fibonacci;
