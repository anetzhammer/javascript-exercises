// works with larger number first
// returns error with negative numbers
// returns error with non-number parameters

const sumAll = function (a, b) {
    if (((typeof a == "number") && (a > 0)) && ((typeof b == "number") && (b > 0))) {
        let small = Math.min(a, b)
        let max = Math.max(a, b)
        let count = []
             for (let i = small; i <= max; i++) {
                count.push(i)
                    }
                    return console.log((count))
    }
    else {
    console.log(typeof a, a, typeof b, b,)
    return 'RROR'
}
;
}

sumAll(9, 4)
// Do not edit below this line
module.exports = sumAll;