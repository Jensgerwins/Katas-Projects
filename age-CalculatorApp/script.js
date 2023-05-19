const inputDay = document.querySelector("#input_day");
const inputmonth = document.querySelector("#input_month");
const inputyears = document.querySelector("#input_year");

const daysList = document.querySelector("#span_days");
const monthList = document.querySelector("#span_months");
const yearsList = document.querySelector("#span_years");

const btn = document.querySelector("#btn");


let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const actualDate = new Date();
let day = actualDate.getDate();
let month = 1 + actualDate.getMonth();
let year = actualDate.getFullYear();

btn.addEventListener("click", rechnung);


function rechnung() {

    if (inputDay.value > day) {
        day = day + months[month - 1];
        month = month - 1;
    }
    if (inputmonth.value > month) {
        month = month + 12;
        year = year - 1;

    }
    const d = day - inputDay.value;
    const m = month - inputmonth.value;
    const y = year - inputyears.value;
    daysList.innerText = d;
    monthList.innerText = m;
    yearsList.innerText = y;

}


function validDate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((item) => {
        const parent = item.parentElement;

    })

}