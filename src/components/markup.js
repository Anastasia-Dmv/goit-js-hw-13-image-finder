import cardTpl from '../templates/cardTpl.hbs';
import {
  refs
} from '../index';

export function updateMarkup(data) {
  const markup = `${cardTpl(data)}`;
  refs.ul.insertAdjacentHTML('beforeend', markup);
  window.scrollBy({
    top: 1000,
    left: 100,
    behavior: 'smooth'
  });

};
