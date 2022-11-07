// -------------------------------1-----------------------------------
// let size = 4;
// let str = "";
// for (let i = 0; i < size; i++){
//     for(let j = 0; j < size; j++){
//         if(i == 0 || i == size - 1 || j == 0 || j == size - 1){
//             str += "#";
//         }
//         else{
//             str += "*";
//         }
//     }
//     str += "\n";
// }
// console.log(str);

// -------------------------------2-----------------------------------
// let size = 4;
// let str = "";
// for (let i = 0; i < size + 1; i++){
//     for(let j = 0; j < size; j++){
//         if(j < size - i)
//        str += " ";
//        else{
//         str += "*";
//        }
//     }
//     str += "\n";
// }
// console.log(str);
// -------------------------------3-----------------------------------

// let str1 = "hello world world world"
// let str2 = "world"
// let index = 0
// let chek = false
// for (let i = 0; i < str1.length; i++) {
//     if (str1[i] == str2[0]) {
//         chek = true
//         for (let j = 0; j < str2.length; j++) {
//             if (str1[i + j] != str2[j]) {
//                 chek = false
//                 break
//             }
//         }
//         if (chek) {
//             index = i
//             break   //if i remove the 'break' it will give me the last matched word and not break the at the first match
//         }
//     }
// }

// console.log(chek)
// if (chek) {
//     console.log(index)
// }

// -------------------------------4-----------------------------------

// //let arrayA = [7, 2, 6, 1, 4, 3, 5];
// let arrayA = [18, 23, 56, 99, 4, 145, 1200];
// let finish = true

// while (finish) {
//     finish = false;
//     for (let i = 0; i < arrayA.length - 1; i++) {
//         if (arrayA[i] > arrayA[i + 1]) {
//             let temp = arrayA[i];
//             arrayA[i] = arrayA[i + 1];
//             arrayA[i + 1] = temp;
//             finish = true;
//         }
//     }
// }
// console.log(arrayA);
/////////////////////////////////////////// in one for loop we can do it also:
let arrayA = [18, 23, 56, 99, 4, 145, 1200];
for (let i = 0; i < arrayA.length - 1; i++) {
if(arrayA[i] > arrayA[i+1]){
    let temp = arrayA[i]
    arrayA[i] = arrayA[i+1]
    arrayA[i+1] = temp
    i = -1
}
}
console.log(arrayA);


//////////////////////////////////////////////////////////////
// let number = Math.round(Math.random() * 4) + 2  -  choose random number between 2 (+ 2) & 4 (* 4) 
// console.log(number)
//////////////////////////////////////////////////////////////


// -------------------------------5-----------------------------------

// let str = "HelloWorld"
// let newStr = [""]
// for (let i = 0; i < str.length; i++) {
//     newStr[i] = str[i]
// }
// for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length - 1; j++) {
//         let charA = newStr[j].charCodeAt(0)
//         let charB = newStr[j + 1].charCodeAt(0)
//         if (charA > charB) {
//             let temp = newStr[j];
//             newStr[j] = newStr[j + 1];
//             newStr[j + 1] = temp;
//         }
//     }
// }
// console.log(newStr.toString())
