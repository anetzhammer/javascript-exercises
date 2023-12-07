const palindromes = function (x) {
const replaced = x.replace(/[^a-z0-9]/gi,'').toLowerCase();
const reversed = replaced.split("").reverse().join("")
if (reversed === replaced) {
return true
}
else 
return false
};


palindromes('Animal loots foliated detail of stool lamina.')



// Do not edit below this line
module.exports = palindromes;
