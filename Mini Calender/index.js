const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

// METHOD 1
// const monthArray = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ]

// const dayArray = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ]

// const month = monthArray[new Date().getMonth()]
// const day = dayArray[new Date().getDay()]
// const dayNumber = new Date().getDate()
// const year = new Date().getFullYear()

// monthEl.innerText = month;
// dayEl.innerText = day;
// dayNumberEl.innerText = dayNumber;
// yearEl.innerText = year;

// METHOD 2
const date = new Date();

monthEl.innerText = date.toLocaleString("en", {
    month: "long"
})
dayEl.innerText = date.toLocaleString("en", {
    weekday: "long"
})
dayNumberEl.innerText = date.toLocaleString("en", {
    day: "numeric"
}) // OR dayNumberEl.innerText = date.getDate()

yearEl.innerText = date.toLocaleString("en", {
    year: "numeric"
}) // OR yearEl.innerText = date.getFullYear()



