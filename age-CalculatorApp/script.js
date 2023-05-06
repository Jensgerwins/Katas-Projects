const inputDay = document.querySelector("#input_day");
const inputmonth = document.querySelector("#input_month");
const inputyears = document.querySelector("#input_year");
const btn = document.querySelector("#btn");

let years = 0;
let month = 0;
let days = 0;
const actualDate = new Date();

btn.addEventListener("click", () => {
    days = inputDay.value;
    daysList = document.querySelector("#span_days");
    daysList.innerText = days;
    month = inputmonth.value;
    monthList = document.querySelector("#span_months");
    monthList.innerText = month;
    years = inputyears.value;
    yearsList = document.querySelector("#span_years");
    yearsList.innerText = years;



})