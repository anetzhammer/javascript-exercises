// works with larger number first
// returns error with negative numbers
// returns error with non-number parameters

const sumAll = function(a,b) {
    if (((typeof a == "number") && a > 0) && (typeof b == "number" && b > 0)){
        console.log(typeof a,a, typeof b,b)
        console.log('yay')
    }
    // let small = Math.min(arguments)
    // console.log(small)
    // return "small"
    else {
    console.log(typeof a,a, typeof b,b)
        return 'EklRROR'
    }
;
}

sumAll(-1,4)
// Do not edit below this line
module.exports = sumAll;
