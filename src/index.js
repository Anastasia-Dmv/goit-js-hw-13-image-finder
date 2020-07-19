import './styles.css';
import axios from 'axios';
var debounce = require('lodash.debounce');
import cardTpl from './templates/cardTpl.hbs';

//var basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';

//const axios = require('axios').default;



const apiKey = '17528324-3082acf682c990c8e2fa3d4c7';
axios.defaults.baseURL = "https://pixabay.com";
// const headers = {
//   Authorization: `Bearer ${apiKey}`,
// };
let searchQuery;
let pageNumber = 1;




const refs = {
  searchInput: document.querySelector('[name="query"]'),
  ul: document.querySelector('.gallery'),
  btn: document.querySelector('.buttons'),

}
refs.searchInput.addEventListener('input', debounce((event => {
  event.preventDefault();
  refs.ul.innerHTML = '';

  searchQuery = event.target.value;
  fetchImages(searchQuery, pageNumber);

}), 1000));

async function fetchImages(searchQuery, pageNumber) {
  try {
    const response = await axios.get(`/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${apiKey}`)
    const objectsList = response.data.hits;
    console.log(objectsList);
    if (objectsList.length === 0) {
      refs.btn.classList.add('hidden');
      PNotify.error({
        title: 'Oh No!',
        text: "Let's try again."
      });
    } else {
      updateMarkup(objectsList);
      refs.btn.classList.remove('hidden');

    }


  } catch (error) {
    throw error;
  }
};

function updateMarkup(data) {
  const markup = `${cardTpl(data)}`;
  refs.ul.insertAdjacentHTML('beforeend', markup);
  window.scrollBy({
    top: 1000,
    left: 100,
    behavior: 'smooth'
  });

};
refs.btn.addEventListener('click', () => {
  pageNumber += 1;
  fetchImages(searchQuery, pageNumber);

});














//=======modal=============
document.querySelector('.gallery').onclick = () => {

  const largeImageUrl = event.target.getAttribute('data-image');

  console.log(largeImageUrl);
  basicLightbox.create(`
		<img width="1400"
		height="900"
		src="${largeImageUrl}">
	`).show()

};



//==============with fetch============
// const fetchImages = async (searchQuery) => {
//  
// const
//   response = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=17528324-3082acf682c990c8e2fa3d4c7`, headers);
// const
//   result = response.json();
// return result;
// }
//==============with fetch============


// import {
//   fetchCountries
// } from './fetchCountries';













//===========




// const axios = require('axios').default;
//import {debounce} from 'debounce';

// inputRef.addEventListener(
//   'input',
//   debounce(function (e) {
//     result = e.target.value;
//     if (result !== '') {
//       axios
//         .get(`https://restcountries.eu/rest/v2/name/${result}`)
//         .then(function (response) {
//           console.log(response.data);
//         })
//         .catch(function (error) {
//           console.log(error);
//         })
//         .finally(function () {
//         });
//     }
//   }, 500),
// );
