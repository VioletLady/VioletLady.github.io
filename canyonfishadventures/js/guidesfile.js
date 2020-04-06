const requestURL = 'https://violetlady.github.io/canyonfishadventures/guides.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const guides = jsonObject['guides'];

        for (let i = 0; i < guides.length; i++) {
            let card = document.createElement('div');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let p5 = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = guides[i].name + ' ' + guides[i].lastname;
            p1.textContent = "Experience: " + guides[i].experience;
            p2.textContent = "Place of Birth: " + guides[i].birthplace;
            p3.textContent = "E-mail: " + guides[i].email;
            p4.textContent = "Certification Level: " + guides[i].certification;
            p5.textContent = "Biography: " + guides[i].biography;
            img.setAttribute('src', guides[i].imageurl);
            img.setAttribute('alt', guides[i].name + ' ' + guides[i].lastname);

            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
            card.appendChild(p5);
            card.appendChild(img);

            document.querySelector('div.cards').appendChild(card);
        }
    });