// question number one 1
let odd = 0
let even = 0

for(let i = 1; i <= 50; i++)
{

if(i % 2 === 0 && i % 3 === 0){
even++
}
else if(i % 2 !== 0 && i % 3 === 0){
odd++
}
}
console.log(" odd numbers: " + odd)
console.log("even number: " + even)

/////////////////////////////////////////////////////////////////////////////////

// question number two 2

let a = 5;
let b = 6;
let result = 0;
for(let i = 0; i < b; i++){
    result += a; 
}
console.log("Kefel Result " + result);

/////////////////////////////////////////////////////////////////////////
// question number three 3

let aa = 5;
let bb = 5;
let result2 = 1;
for(let i = 0; i < bb; i++){
result2 *= aa;
}
console.log("Hezka Result " + result2);

/////////////////////////////////////////////////////////////////////////////
// question number eleven 11

let char_a = "a".charCodeAt(0);
let char_z = "z".charCodeAt(0);
let printChar = "";
for(let char = char_a; char <= char_z; char++){
printChar = String.fromCharCode(char);
    console.log(printChar);
}
char_a = "A".charCodeAt(0);
char_z = "Z".charCodeAt(0);
for(let char = char_a; char <= char_z; char++){
    printChar = String.fromCharCode(char);
        console.log(printChar);
    }