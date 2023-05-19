const inputDay = document.querySelector("#input_day");
const inputmonth = document.querySelector("#input_month");
const inputyears = document.querySelector("#input_year");
const btn = document.querySelector("#btn");
let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const actualDate = new Date();
let day = actualDate.getDate();
let months = 1 + actualDate.getMonth();
let year = actualDate.getFullYear();

btn.addEventListener("click", rechnung());


function rechnung() {
    days = inputDay.value;
    daysList = document.querySelector("#span_days");
    daysList.innerText = days;
    month = inputmonth.value;
    monthList = document.querySelector("#span_months");
    monthList.innerText = month;
    years = inputyears.value;
    yearsList = document.querySelector("#span_years");
    yearsList.innerText = years;
    if (days > day) {
        days = day + months[month - 1];
        month = month - 1;
    }
    if (month > months) {
        months = month + 12;
        year = year - 1;

    }
    const d = day - days;
    const m = months - month;
    const y = year - years;
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