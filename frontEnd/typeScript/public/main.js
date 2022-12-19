"use strict";
console.log("hello world");
let a = 4;
let b = 2;
let c = a + b;
console.log("c = " + c);
b *= 3;
console.log("b * 3 = " + b);
console.log("res = " + ((a + b) / a));
if (b > 10) {
    console.log(" b bigger than ten, answer is" + b / 2);
}
else {
    console.log(b);
}
if (c > 1 && c < 10) {
    console.log("in range");
}
let days = 16;
console.log(" you save " + Math.floor(days / 7) + " weeks and " + days % 7 + " days");
console.log("\n");
let num = 7;
let numNew = num + "";
for (let i = 0; i < numNew.length; i++) {
    console.log(numNew[i]);
}
for (let i = 0; i < num; i++) {
    console.log(i);
}
