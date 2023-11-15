let ary = []

const removeFromArray = function(arrayContents, removed) {
    ary = arrayContents.filter((element) => 
        (element !== removed))
    console.log(ary)
    return ary
};


// Do not edit below this line
module.exports = removeFromArray;
