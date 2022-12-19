import {products} from './index.js'

function load() {
    let query = window.location.search
    let urlParams = new URLSearchParams(query)

    // import('./index.js')
    // .then((a)=>{a.products})
    // .catch(e =>{console.log(e.message)})

    if (!urlParams.has("id")) {
        document.querySelector(".eror").style.display = "block"
        return
    }
    let ids = urlParams.get("id")
    let product = products.find(p => p.id == ids)

    if(!product){
        document.querySelector(".eror").style.display = "block"
        return
    }
    document.querySelector(".p-name").textContent = product.name
    document.querySelector(".p-price").textContent = product.price
    document.querySelector(".p-info").textContent = product.info

    document.querySelector(".show").style.display = "block"
}
load()