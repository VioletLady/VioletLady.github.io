const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=83549,us&appid=2476e5f44826f4acbbad02fe01f1a66e&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
		//console.log(weatherInfo);
    
    document.getElementById("weather").innerHTML=weatherInfo.weather[0].main;
    document.getElementById("current").innerHTML=weatherInfo.main.temp;
 

	const iconcode = weatherInfo.weather[0].icon;
	//console.log(iconcode);
	
	const icon_path="//openweathermap.org/img/w/" + iconcode + ".png";
	//console.log(icon_path);
		
	document.getElementById("icon").src = icon_path;

}); //end of "then" fat arrow function

