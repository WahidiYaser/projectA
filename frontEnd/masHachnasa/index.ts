let form = document.body.querySelector("form");
let netoResult = document.querySelector(".result.neto");
let taxResult = document.querySelector(".result.tax");

form?.addEventListener("submit", (e) => {
    e.preventDefault()
    let userInput = Number((document.querySelector("#mas") as HTMLInputElement).value);
    let monthly = userInput / 12;
    let taxTemp = 0;

    if (monthly >= 6450)
        taxTemp = 6450 * 0.10;

    if (monthly >= 6451) {
        if (monthly >= 9240)
            taxTemp += (2789 * 0.14);
        else
            taxTemp += ((monthly - 6450) * 0.14);
    }

    if (monthly >= 9241) {
        if (monthly >= 14840)
            taxTemp += 5599 * 0.20;
        else
            taxTemp += ((monthly - 9241) * 0.20);
    }

    if (monthly >= 14841) {
        if (monthly >= 20620)
            taxTemp += 5779 * 0.31;
        else
            taxTemp += ((monthly - 14841) * 0.31);
    }

    if (monthly >= 20621) {
        if (monthly >= 42910)
            taxTemp += 22289 * 0.35;
        else
            taxTemp += ((monthly - 20621) * 0.35);
    }

    if (monthly >= 42911) {
        if (monthly >= 55270)
            taxTemp += 12359 * 0.47;
        else
            taxTemp += ((monthly - 42911) * 0.47);
    }

    if (monthly >= 55271) {
        taxTemp += (monthly - 55271) * 0.50;
    }

    netoResult!.textContent = (monthly - taxTemp).toString()
    taxResult!.textContent = taxTemp.toString()
});
