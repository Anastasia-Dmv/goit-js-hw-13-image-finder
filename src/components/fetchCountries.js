//import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
import countriesTpl from './templates/countries.hbs';
import countryTemplate from './templates/countryTemplate.hbs';
import {
  refs
} from './index';



export function fetchCountries(searchQuery) {
  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => response.json())


    .then(countries => {
      if (countries.length > 10) {
        PNotify.error({
          title: 'Oh No!',
          text: 'Too many matches found. Please enter a more  specific query!'
        });
        refs.content.innerHTML = ''
      }
      if (countries.length < 10) {
        const listOfCountries = countries.map(country => country.name)

        const markup = countriesTpl(listOfCountries);
        refs.content.innerHTML = markup;
      }
      if (countries.length === 1) {

        const markup = countryTemplate(
          countries[0]
        );
        refs.content.innerHTML = markup;
      }
    })
};
