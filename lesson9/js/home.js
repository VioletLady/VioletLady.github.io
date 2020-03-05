const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        console.log(towns);


        for (let i=0; i<towns.length; i++){
            if(towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs"){
            let card = document.createElement('section');
            console.log(towns);    

            let h2 = document.createElement('h2');
            let motto = document.createElement('h3');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let img = document.createElement('img');

            let link = towns[i].name.replace(/\s/g, '') + '.html'
            card.onclick = function() { window.open(link); } //to link the imgs in home to their respective pages    


            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            year.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;

            img.setAttribute('src', 'images/' + towns[i].photo);
            img.setAttribute('alt', towns[i].name);

            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(year);
            card.appendChild(population);
            card.appendChild(rainfall);
            card.appendChild(img);

            document.querySelector('div.homecards').appendChild(card);
        }
    }
      });
