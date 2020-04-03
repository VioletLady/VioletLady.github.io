
/*let m = new Date();

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var weekday = days[m.getDay()];

var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = monthShortNames[m.getMonth()];

//let month = m.getMonth() + 1;
let day = m.getDate();
let year = m.getFullYear(); 

let dateString = weekday + ", " + month + " " + day + ", " + year + " ";
document.getElementById("todayDate").textContent = dateString;
*/

//both methods work

var today = new Date();
var formatOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var currentdate = today.toLocaleDateString('en-US', formatOptions);


document.getElementById("todaydate").textContent = currentdate;