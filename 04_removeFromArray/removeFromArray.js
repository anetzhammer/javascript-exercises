let ary = []

const removeFromArray = function(arrayContents, ...removed) {
    ary = arrayContents.filter(element => !removed.includes(element));
    return ary
};

console.log(removeFromArray([1, 2, 3, 4], 2, 3))

// Do not edit below this line
module.exports = removeFromArray;
