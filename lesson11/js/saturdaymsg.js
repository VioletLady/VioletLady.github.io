const Today = new Date();
//console.log(Today);

const dayNumber = Today.getDay();
//console.log(dayNumber);

const element = document.getElementById("message");

if (dayNumber == 5) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}