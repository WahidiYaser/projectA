
let rows = document.querySelectorAll("tbody tr")
let sum = 0
for(let i = 0; i < rows.length; i+=1){
    let cells = rows[i].children
    sum += parseInt(cells[1].innerText)
}
document.getElementById("sum").innerText = sum + ""
