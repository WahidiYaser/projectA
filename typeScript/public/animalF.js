"use strict";
function buildAnimalArr(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = { id: 1, name: "", age: 1, type: "" };
        arr[i].id = i;
        arr[i].name = generateName();
        arr[i].type = randomAnimal();
        arr[i].age = animalAge(arr[i].type);
    }
    return arr;
}
function displayThisAnimal(arr, str) {
    let newArr = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === str) {
            newArr[j++] = arr[i];
        }
    }
    return newArr;
}
function updateAnimal(arr, anim) {
    let i = arr.length;
    arr[i] = anim;
    arr[i].id = i;
    return arr;
}
function deleteAnimalById(arr, id) {
    let newArr = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id !== id)
            newArr[j++] = arr[i];
    }
    return newArr;
}
function deleteAnimalByType(arr, str) {
    let newArr = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type !== str)
            newArr[j++] = arr[i];
    }
    return newArr;
}
function randomAnimal() {
    let anim = ["dog", "cat", "mouse", "ant", "fish"];
    let i = Math.round(Math.random() * 4);
    return anim[i];
}
function animalAge(str) {
    if (str == "dog")
        return Math.round(Math.random() * (16 - 8) + 8);
    else if (str == "cat")
        return Math.round(Math.random() * (18 - 12) + 12);
    else if (str == "mouse")
        return Math.round(Math.random() * (3 - 1) + 1);
    else if (str == "ant")
        return Math.round(Math.random() * (2 - 1) + 1);
    else if (str == "fish")
        return Math.round(Math.random() * (5 - 2) + 2);
}
function generateName() {
    let len = Math.round(Math.random() * (5 - 3)) + 3;
    let text = "";
    for (let i = 0; i < len; i++) {
        let randomChar = Math.round(Math.random() * (122 - 97)) + 97;
        text += String.fromCharCode(randomChar);
    }
    return text;
}
let myAnimalArr = buildAnimalArr(5);
console.log(myAnimalArr);
// console.log(displayThisAnimal(myAnimalArr, "mouse"))
// console.log(updateAnimal(myAnimalArr, {id:0, name:"joe", age:14, type:"cat"}))
// console.log(deleteAnimalById(myAnimalArr, 2))
console.log(deleteAnimalByType(myAnimalArr, "mouse"));
