// // -------------------------------1-----------------------------------
// /////////////////////////// a

// let size = 15
// let arr = [ { age:0, height:0, salary:0 } ]
// for(let i = 0; i < size; i++){
//     arr[i] = {
//         age: Math.round(Math.random() * 27 + 18),
//         height: parseFloat((Math.random() * 1.9 + 1).toFixed(1)) ,
//         salary :Math.round(Math.random() * 6000 + 2000)
//     }
// }
// console.log(arr)

// /////////////////////////// b
// let sum = 0
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length-1; j++){
//         let checkA = arr[j].age
//         let checkB = arr[j+1].age
//         if(checkA > checkB){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
//         sum += arr[i].age
// }
// sum = sum / arr.length
// console.log(arr)

// /////////////////////////// c
// //console.log(sum)
// console.log(" the youngest man " + arr[0].age)
// console.log(" the older man " + arr[arr.length-1].age)

// ////////////////////////// D

// for(let i = 0; i < arr.length-1; i++){
//     if(arr[i].salary > 4300 && arr[i].age >= 20 && arr[i].age <= 30){
//         console.log(arr[i])
//     }
// }

// ////////////////////////// E

// for(let i = 0; i < arr.length-1; i++){
//     if(arr[i].age > sum){
//         console.log(arr[i].salary)
//     }
// }



// // -------------------------------2-----------------------------------


let size = 5
let arr = [{ age: 0, height: 0, salary: 0, name: "" }]
for (let i = 0; i < size; i++) {
    arr[i] = {
        age: Math.round(Math.random() * 27 + 18),
        height: parseFloat((Math.random() * 1.9 + 1).toFixed(1)),
        salary: Math.round(Math.random() * 6000 + 2000),
        name: makeAName(5, "")
    }
}
console.log(arr)
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length-1; j++){
        if(arr[j].age > arr[j+1].age){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log(arr)
//////////////////// recursive function
function makeAName(num, str) { 
    let char = Math.round(Math.random() * 25 + 97)
    let newChar = String.fromCharCode(char)
    str += newChar
    if(num == 0)
    return str
    return makeAName(num - 1, str)
}
//////////////////// regular function
// function makeAName(num, str) {
//     for(let i = num; i >= 0; i--){
//         let char = Math.round(Math.random() * 25 + 97)
//         let newChar = String.fromCharCode(char)
//         str += newChar
//     }
//     return str
// }
