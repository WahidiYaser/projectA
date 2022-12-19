let products = [
    { id: 0, name: "Nokia", price: 1200, info: "aaaaaa" },
    { id: 1, name: "Iphone", price: 5700, info: "aaaaaa" },
    { id: 2, name: "Samsung", price: 3800, info: "aaaaaa" },
    { id: 3, name: "BlacBerry", price: 2700, info: "aaaaaa" }
]

function showData() {
    let table = document.querySelector("tbody")
    for (let element of products) {
        let row = createTd(element)
        table?.appendChild(row)
    }
}


function createTd(p){
    let row = document.createElement("tr")
    let td = document.createElement("td")
    let td1 = document.createElement("td")
    let link = document.createElement("a")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")

    td.textContent = p.id
    link.textContent = p.name
    link.setAttribute("href", "./product.html?id="+p.id)
    td1.appendChild(link)
    td2.textContent = p.price
    td3.textContent = p.info
    row.appendChild(td)
    row.appendChild(td1)
    row.appendChild(td2)
    row.appendChild(td3)
    return row
}

showData()
export {products}
