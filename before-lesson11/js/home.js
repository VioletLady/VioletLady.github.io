const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const idahoTowns = jsonObject['towns'];
        //console.log(towns);

        for (let i=0; i<idahoTowns.length; i++){
            if(idahoTowns[i].name == "Fish Haven" || idahoTowns[i].name == "Preston" || idahoTowns[i].name == "Soda Springs"){
            let card = document.createElement('section');
            //console.log(towns);    

            let h2 = document.createElement('h2');
            let motto = document.createElement('h3');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = idahoTowns[i].name;
            motto.textContent = idahoTowns[i].motto;
            year.textContent = "Year Founded: " + idahoTowns[i].yearFounded;
            population.textContent = "Population: " + idahoTowns[i].currentPopulation;
            rainfall.textContent = "Annual Rainfall: " + idahoTowns[i].averageRainfall;

            img.setAttribute('src', 'images/' + idahoTowns[i].photo);
            img.setAttribute('alt', idahoTowns[i].name);

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
