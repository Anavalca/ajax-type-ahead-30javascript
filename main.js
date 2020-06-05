'use strict';

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.sugestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));


function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        return place.city.toLowerCase().includes(wordToMatch.toLowerCase()) ||
        place.state.toLowerCase().includes(wordToMatch.toLowerCase())}
    );
}

function displayMarches(){
    const matchArray = findMatches(this.value, cities)
    console.log(matchArray)
}

searchInput.addEventListener('keyup', displayMarches)
