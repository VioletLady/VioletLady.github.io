const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        //prophets.forEach(prophet => {
        //let card = document.createElement('section);
        //let h2 = document.createElement('h2');
        //h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        //card.appendChild(h2);
        //document.querySelector('div.cards').appendChild(card);
        //})
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let img = document.createElement('img');
            let p3 = document.createElement('p');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            p1.textContent = "Date of Birth: " + prophets[i].birthdate;
            p2.textContent = "Place of Birth: " + prophets[i].birthplace;
            img.setAttribute('src', prophets[i].imageurl);
            img.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - '+ prophets[i].order);
            p3.textContent = "Number of Children: " + prophets[i].numofchildren;

            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(img);
            card.appendChild(p3);

            document.querySelector('div.cards').appendChild(card);
        }
    });