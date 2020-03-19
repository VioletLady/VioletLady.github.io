const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=83287,us&appid=2476e5f44826f4acbbad02fe01f1a66e&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);
    

    //let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow (speedNumber, 0.16)) + (0.4275 * tempNumber *Math.pow(speedNumber, 0.16));
    let windchill = 35.74 + (0.6215 * weatherInfo.main.temp) - (35.75 * Math.pow(weatherInfo.wind.speed, 0.16)) + (0.4275 * weatherInfo.main.temp * Math.pow(weatherInfo.wind.speed, 0.16));

    //console.log(windchill);
    windchill = Math.round(windchill);
    //console.log(windchill);

    if(weatherInfo.main.temp<=50  &&  weatherInfo.wind.speed>3){
        document.getElementById("chill").textContent = windchill+"\xB0F";
    }else {
        document.getElementById("chill").textContent = "N/A";
    }

    document.getElementById("weather").innerHTML=weatherInfo.weather[0].main;
    document.getElementById("current").innerHTML=weatherInfo.main.temp;
    document.getElementById("windSpeed").innerHTML=weatherInfo.wind.speed;
    document.getElementById("humidity").innerHTML=weatherInfo.main.humidity;
    
   

	const iconcode = weatherInfo.weather[0].icon;
	//console.log(iconcode);
	
	const icon_path="//openweathermap.org/img/w/" + iconcode + ".png";
	//console.log(icon_path);
		
	document.getElementById("icon").src = icon_path;

}); //end of "then" fat arrow function

const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const apiURL5forecast = "//api.openweathermap.org/data/2.5/forecast?zip=83287,us&appid=2476e5f44826f4acbbad02fe01f1a66e&units=imperial";

fetch(apiURL5forecast)
    .then((response) => response.json())
    .then((weatherInf) => {
       // console.log(weatherInf);


        document.getElementById("townName").textContent = weatherInf.city.name + " Five Day Forecast";

        let mylist = weatherInf.list;

        let forecastDayNumber = todayDayNumber;

        for (i = 0; i < mylist.length; i++) {

            let time = mylist[i].dt_txt;

            if (time.includes('18:00:00')) {
                //console.log("Found an entry with 18:00:00 in the time. it was report " + i + " from the mylist of 40");

                forecastDayNumber += 1;
                if (forecastDayNumber === 7) { forecastDayNumber = 0; }

                let theDayName = document.createElement("span");
                theDayName.textContent = weekday[forecastDayNumber];

                let theTemp = document.createElement("p");
                theTemp.textContent = "Highest: " + weatherInf.list[i].main.temp + "\xB0";

                let iconcode = weatherInf.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                const desc = weatherInf.list[i].weather[0].description;
                let theIcon = document.createElement("img");
                theIcon.src = iconPath;
                theIcon.setAttribute('src', iconPath);
                theIcon.setAttribute('alt', desc);

                let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                document.getElementById('forecast').appendChild(theDay);

            }
        }
    });