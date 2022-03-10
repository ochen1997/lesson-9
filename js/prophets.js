const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function(response) {
        return response.json();

    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });
      

function displayProphets(prophet){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p')
    let p2 = document.createElement('p')
    let potrait = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p.innerHTML = `Date of Birth: ${prophet.birthdate}`;
    p2.innerHTML = `Place of Birth: ${prophet.birthplace}`

    potrait.setAttribute('src', prophet.imageurl);
    potrait.setAttribute('alt', `potrait of ${prophet.name} ${prophet.lastname}`);
    potrait.setAttribute('loading', 'lazy');
    card.appendChild(h2)
    card.appendChild(p)
    card.appendChild(p2)
    card.appendChild(potrait)
    cards.appendChild(card)
}







  