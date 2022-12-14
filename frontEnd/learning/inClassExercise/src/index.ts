let products = [
    { id: 1, name: "iphone-4", category: "phones", price: 6100 },
    { id: 2, name: "red-xt", category: "phones", price: 4150 },
    { id: 3, name: "xiomi-t7", category: "phones", price: 1700 },
    { id: 4, name: "redmi-7", category: "phones", price: 500 },
    { id: 5, name: "macbook-air", category: "laptop", price: 4900 },
    { id: 6, name: "macbook-pro", category: "laptop", price: 13600 },
    { id: 7, name: "dell-topA", category: "laptop", price: 4200 },
    { id: 8, name: "samsung 34inc 1080p", category: "tv", price: 31900 },
    { id: 9, name: "lg smart led", category: "tv", price: 21500 },
    { id: 10, name: "panasonic A9", category: "tv", price: 14200 },
]
let categoryDiv = document.querySelector(".category")
let productDiv = document.querySelector(".products")

function categoryList(arr: any[]) {   //return the "categories" names from the products array without duplication
    let newArr = [""], j = 0
    for (let i = 0; i < arr.length; i++) {
        newArr[j++] = arr[i].category
    }
    newArr = [...new Set(newArr)]
    return newArr
}
function createCategorys() {  //insert the categories in the htmlDOM inside the <ul></ul>
    let arr = categoryList(products)
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li")
        li.innerHTML = arr[i]
        li.classList.add("all")
        categoryDiv?.appendChild(li)
    }
}
createCategorys()

let categoryBtns = document.querySelectorAll(".category li")
categoryBtns.forEach((a) => {  //call the function for every button that displays the products by their own category
    a.addEventListener("click", displayDetails)
})

function displayDetails() {  //displays product list with the same/appropriate category 
    let myTarget = (event?.target as HTMLElement).innerHTML
    let productsDiv = document.querySelectorAll(".products div")
    productsDiv.forEach((a) => {
        a.setAttribute("class", "hide")
        a.classList.add("all")
    })
    let div = document.createElement("div")
    div.setAttribute("class", "display")
    products.forEach((a) => {
        if ((a.category == myTarget) || (myTarget == "all")) {
            let p = document.createElement("p")
            p.innerText += a.id + " " + a.category + " " + a.name + " " + a.price
            div.appendChild(p)
        }
    })
    productDiv!.appendChild(div)
}