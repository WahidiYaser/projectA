// let num = 5
// function factorial(n){
// if(n == 1)
// return n
// return factorial(n - 1) * n
// }
// console.log(factorial(num))

//--------------------------------------------------------------------------------
// greatest common divisor 

// let first = 14280, second = 1638
// function gcd(a, b){
// if(b == 0)
// return b+a
// return gcd(b, a%b)
// }
// console.log(gcd(first, second))
//--------------------------------------------------------------------------------
// get numbers between the X and Y
// let num1 = 2, num2 = 9
// function getTheBetween(a, b){
// if(a+1 == b-1)
// return a+1

// console.log(a+1)
// return (getTheBetween(a + 1, b)) 
// }
// console.log(getTheBetween(num1, num2))
//--------------------------------------------------------------------------------
// //get the sum if an array
// let arr = [1, 2, 3, 4, 5, 6]
// function theSum(arr, i){
// if(i == 0)
// return arr[i]
// return theSum(arr, i-1) + arr[i]
// }
// console.log(theSum(arr, arr.length-1))
//---------------------------------------------------------------------------------
//exponent number exp

// let num = 4, exp = 2
// function theExponent(n, exp){
// if(exp == 0)
// return 1
// return n * theExponent(n, exp-1)
// }
// console.log(theExponent(num, exp))

//---------------------------------------------------------------------------------

// function fiBonacci(n) {
//     if (n == 1)
//     return [0, 1]
    
//     let s = fiBonacci(n-1)
//     s.push(s[s.length-1] + s[s.length-2])
//     return s
// }

// console.log(fiBonacci(8))
//---------------------------------------------------------------------------------

// function evenOrNot(n){
// if(n % 2 == 0)
// return true
// else
// return false
// }
// console.log(evenOrNot(10))
//---------------------------------------------------------------------------------

// let array = [34,7,23,32,5,62]
// function mergeSort(arr, i){
// if(i <= 0)
// return arr
// else if(arr[i] < arr[i-1]){
//     let temp = arr[i]
//     arr[i] = arr[i-1]
//     arr[i-1] = temp
//     mergeSort(arr, arr.length-1)
// }
// else
// mergeSort(arr, i-1)
// }
// let x = mergeSort(array, array.length-1)
// console.log(array)
