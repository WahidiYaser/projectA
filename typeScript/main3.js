// ----------------------- question 1 -----------------------
// let char_a = "a".charCodeAt(0);
// let char_z = "z".charCodeAt(0);
// let printChar = "";
// for(let char = char_a; char <= char_z; char++){
// printChar = String.fromCharCode(char);
//     console.log(printChar);
// }
// char_a = "A".charCodeAt(0);
// char_z = "Z".charCodeAt(0);
// for(let char = char_a; char <= char_z; char++){
//     printChar = String.fromCharCode(char);
//         console.log(printChar);
//     }
// ----------------------- question 2 -----------------------
var aString = "olleh";
var bString = "";
for (var i = aString.length; i >= 0; i--) {
    var char = aString[0];
    bString += char;
}
console.log(bString);
