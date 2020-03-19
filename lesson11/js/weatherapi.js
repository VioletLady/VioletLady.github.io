//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=2476e5f44826f4acbbad02fe01f1a66e&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
  

    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').innerHTML=jsObject.main.humidity;
    document.getElementById('tempMax').innerHTML=jsObject.main.temp_max;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
    
  
 }); 
