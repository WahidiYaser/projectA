console.log("hello world");
var a = 4;
var b = 2;
var c = a + b;
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
var days = 16;
console.log(" you save " + Math.floor(days / 7) + " weeks and " + days % 7 + " days");
console.log("\n");
var num = 7;
var numNew = num + "";
for (var i = 0; i < numNew.length; i++) {
    console.log(numNew[i]);
}
for (var i = 0; i < num; i++) {
    console.log(i);
}
