import axios from 'axios';
import {
  refs
} from '../index';
import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import {
  updateMarkup
} from './markup';


const apiKey = '17528324-3082acf682c990c8e2fa3d4c7';
axios.defaults.baseURL = "https://pixabay.com";
// const headers = {
//   Authorization: `Bearer ${apiKey}`,
// };


export async function fetchImages(searchQuery, pageNumber) {
  try {
    const response = await axios.get(`/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${apiKey}`)
    const objectsList = response.data.hits;

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
