import './styles.css';
import axios from 'axios';
var debounce = require('lodash.debounce');

import cardTpl from './templates/cardTpl.hbs';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';


import {
  fetchImages
} from './components/apiService';



let searchQuery;
let pageNumber = 1;

export const refs = {
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



refs.btn.addEventListener('click', () => {
  pageNumber += 1;
  fetchImages(searchQuery, pageNumber);

});











//const axios = require('axios').default;
//var basicLightbox = require('basiclightbox');



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
