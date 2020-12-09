// Make sure Windows is loaded
// Getting data
const url =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
const prom = fetch(url)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

// Getting the research
function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
// Displaying the results
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      return `<li>
    <span className='name'>${place.city}</span>
    <span className='population'>${numberWithCommas(place.population)}</span>
    </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}

const input = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

input.addEventListener("change", displayMatches);
input.addEventListener("keyup", displayMatches);

// Get in shape the number (thx stackoverflow)
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
