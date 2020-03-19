const requestURLevents = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURLevents)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
		// console.table(jsonObject);	// temporary checking for valid response and data parsing
	const towns = jsonObject['towns'];
//	console.log(towns);


for (let i = 0; i < towns.length; i++ ) {
    if (towns[i].name == "Fish Haven"){
		
      let cardEvents = document.createElement('section');
      let h3 = document.createElement('h3');
      let event1 = document.createElement("p");
      let event2 = document.createElement("p");
      let event3 = document.createElement("p");
      
      h3.textContent = towns[i].name;
      event1.textContent = towns[i].events[0];
      event2.textContent = towns[i].events[1];
      event3.textContent = towns[i].events[2];
      
      cardEvents.appendChild(h3);
      cardEvents.appendChild(event1);
      cardEvents.appendChild(event2);
      cardEvents.appendChild(event3);
      
      document.querySelector('div.events').appendChild(cardEvents);
        }
      }
        });