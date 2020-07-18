import './styles.css';
//import axios from 'axios';
const axios = require('axios').default;
var debounce = require('lodash.debounce');
import cardTpl from './templates/cardTpl.hbs'
// import
// debounce
// from 'debounce';


const apiKey = '17528324-3082acf682c990c8e2fa3d4c7';
//const test = "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=17528324-3082acf682c990c8e2fa3d4c7"
axios.defaults.baseURL = "//https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=";
const headers = {
  Authorization: `Bearer ${apiKey}`,
};
let searchQuery;
let pageNumber;

const refs = {
  searchInput: document.querySelector('[name="query"]'),
  form: document.querySelector('.search-form'),
}
refs.searchInput.addEventListener('input', debounce((event => {
  searchQuery = event.target.value;
  fetchImages(searchQuery);
}), 500));

async function fetchImages(searchQuery) {
  try {
    const response = await axios.get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=17528324-3082acf682c990c8e2fa3d4c7`)
    const objectsList = response.data.hits;
    //const oneImage = response.data.hits[0]
    // const oneImage = objectsList.forEach(element => element);

    console.log(objectsList);

    const markup = `<ul class="gallery">
  ${cardTpl(objectsList)}
</ul> `

    refs.form.insertAdjacentHTML('afterend', markup);


  } catch (error) {

    console.error(error);
  }

};



// const fetchImages = async (searchQuery) => {
//  
// const
//   response = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=17528324-3082acf682c990c8e2fa3d4c7`, headers);
// const
//   result = response.json();
// return result;
// }


//pageNumber
// "${searchQuery}&page=2&key=${apiKey}"

// //import PNotify from 'pnotify/dist/es/PNotify.js';
// import 'pnotify/dist/PNotifyBrightTheme.css';
// import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
// import {
//   fetchCountries
// } from './fetchCountries';

// Your API key: 17528324-3082acf682c990c8e2fa3d4c7
//  const searchQuery = `${baseURL} + ${что_искать} + &page=номер_страницы&per_page=12&key=твой_ключ

//per page = 12
//defoult page =1;
//  при каждом запросе page+=1;
//сброс при поиске по новому ключевому слову page=1;

// "comments": 78,
// "downloads": 63296
// "largeImageURL":
//   "likes ": 575,
//   "views": 127450,
//    "webformatURL":


//loadmore inserAdjacentHTML('beforeend', markup)














//===========



// PNotify.alert('Notice me, senpai!');
// const axios = require('axios').default;
//import {debounce} from 'debounce';

// inputRef.addEventListener(
//   'input',
//   debounce(function (e) {
//     // console.log(e.target.value);
//     result = e.target.value;
//     if (result !== '') {
//       axios
//         .get(`https://restcountries.eu/rest/v2/name/${result}`)
//         .then(function (response) {
//           // handle success
//           console.log(response.data);
//         })
//         .catch(function (error) {
//           // handle error
//           console.log(error);
//         })
//         .finally(function () {
//           // always executed
//         });
//     }
//   }, 500),
// );
