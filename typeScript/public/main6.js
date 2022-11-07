"use strict";
//---------------------------1---------------------------
// let numA = 8
// function printFromZeroTo(n){
// if(n == -1){
//     return 0
// }
// return printFromZeroTo(n - 1) + console.log(n)
// }
// printFromZeroTo(numA)
//---------------------------2---------------------------
// let numA = 15
// function printFromTo(i, n){
// if(n == i-1){
//     return 0
// }
// return printFromTo(i, n - 1) + console.log(n)
// }
// printFromTo(11, numA)
//---------------------------3---------------------------
// function printCharNtimes(c, n){
// if(n == 0)
// return
// return printCharNtimes(c, n-1) + console.log(c)
// }
// printCharNtimes("@", 5)
//---------------------------4---------------------------
// let arr = [7, 3, 5, 2, 4, 1, 6]
// function bubbleSort(arr, index) {
//     if (index == -1)
//         return arr
//     if (arr[index] > arr[index + 1]) {
//         let temp = arr[index]
//         arr[index] = arr[index + 1]
//         arr[index + 1] = temp
//         index = arr.length - 1
//     }
//     return bubbleSort(arr, index - 1)
// }
// let res = bubbleSort(arr, arr.length - 1)
// console.log(res)
//---------------------------5---------------------------
// let arr = [ 3, -12, -5, -9, 6, -7, -15, -2, -1, -18, 24 ] , positive = 0;
// function countPositiveNumbersInIntArray(arr, index){
// if(index == -1)
// return positive
// if(arr[index] >= 0)
// positive++
// return countPositiveNumbersInIntArray(arr, index-1)
// }
// console.log(countPositiveNumbersInIntArray(arr, arr.length-1))
//----------------------------------------------------------------------
let arr = [3, -12, -5, -9, 6, -7, -15, -2, -1, -18, 24], positive = 0;
function countPositiveNumbersInIntArray(arr, index) {
    if (index == -1)
        return positive;
    if (arr[index] >= 0)
        positive++;
    return countPositiveNumbersInIntArray(arr, index - 1);
}
console.log(countPositiveNumbersInIntArray(arr, arr.length - 1));
