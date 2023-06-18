//.waren - korb
//warenkorb - header
"use strict";
const warenSvg1 = document.querySelector("#warenkorb-header");
const warenCheck = document.querySelector("#warencheckout");
const plusbtn = document.querySelector("#product-plus");
const minbtn = document.querySelector("#product-minus");
const btn = document.querySelector("#product-button");
const anzahldisplay = document.querySelector("#product-anzahl");
const textwarenkorb = document.querySelector("#Empty-warencorp");
const newprice = document.querySelector("#new-price");
let anzahl = 0;
let price = 0;
let aktuelerpreis = 125.00;





warenSvg1.addEventListener("toggle", warenkorbCheck);

plusbtn.addEventListener("click", () => {
    anzahl = anzahl + 1;
    anzahldisplay.innerHTML = anzahl;
})

minbtn.addEventListener("click", () => {
    if (anzahl < 1) {

        return anzahldisplay.innerHTML = 0;
    } else

        anzahl = anzahl - 1;
    anzahldisplay.innerHTML = anzahl;
})

btn.addEventListener("click", () => {
    const summe = aktuelerpreis * anzahl;
    return newprice.innerText = summe + ".00$";

})



function warenkorbCheck() {
    if (warenCheck.style.display == "block") {
        return warenCheck.style.display = "none";
    }
    return warenCheck.style.display = "block";
}