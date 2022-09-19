// question number one 1
var odd = 0;
var even = 0;
for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        even++;
    }
    else if (i % 2 !== 0 && i % 3 === 0) {
        odd++;
    }
}
console.log(" odd numbers: " + odd);
console.log("even number: " + even);
/////////////////////////////////////////////////////////////////////////////////
// question number two 2
var xa = 5;
var xb = 6;
var result = 0;
for (var i = 0; i < xb; i++) {
    result += xa;
}
console.log("Kefel Result " + result);
/////////////////////////////////////////////////////////////////////////
// question number three 3
var aa = 5;
var bb = 5;
var result2 = 1;
for (var i = 0; i < bb; i++) {
    result2 *= aa;
}
console.log("Hezka Result " + result2);
/////////////////////////////////////////////////////////////////////////////
// question number eleven 11
var char_a = "a".charCodeAt(0);
var char_z = "z".charCodeAt(0);
var printChar = "";
for (var char = char_a; char <= char_z; char++) {
    printChar = String.fromCharCode(char);
    console.log(printChar);
}
char_a = "A".charCodeAt(0);
char_z = "Z".charCodeAt(0);
for (var char = char_a; char <= char_z; char++) {
    printChar = String.fromCharCode(char);
    console.log(printChar);
}
