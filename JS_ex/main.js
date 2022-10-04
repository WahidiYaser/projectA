let arr = [7, 2, 3, 8, 1, 6, 5, 4]
let newArr = arr
console.log(newArr)

for(let i = 0; i < arr.length-1; i++){
    if(arr[i] > arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        i = -1
    }
}

console.log(arr)
