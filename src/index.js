import { getImages, myValue } from './fetches'
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import Notiflix from 'notiflix';

const lightbox = new SimpleLightbox('.gallery a');

const refs = {
    imagesForm: document.querySelector('.js-form'),
    ulList: document.querySelector('.js-fotocards'),
    btnLoadMore: document.querySelector('.js-load-more'),
};

refs.imagesForm.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onClickLoadMore);


function onFormSubmit(evt) {
    evt.preventDefault();
  const query = refs.imagesForm.elements.searchQuery.value;
  myValue.query = query;
  myValue.page = 1;
  refs.ulList.innerHTML = '',
      
    getImages().then(data => {
      if (data.totalHits === 0) {
        Notiflix.Notify.failure('Qui timide rogat docet negare');
      } else {
        createMarup(data.hits);
        Notiflix.Notify.success(`${data.totalHits}`);
        console.log(data);
      }
    })
};

function createMarup(array) {
    const markup = array.map(({webformatURL, tag, likes, views, comments, downloads, largeImageURL}) => {
        return `
  <div class="photo-card">
        <a class="photo__link" href="${largeImageURL}">
        <div class="wrap">
        <img class="photo" src="${webformatURL}" alt="${tag}"  loading="lazy" />
        </div>
        <div class="info">
          <p class="info-item">
            <b>Likes</b> ${likes}
          </p>
          <p class="info-item">
            <b>Views</b> ${views}
          </p>
          <p class="info-item">
            <b>Comments</b> ${comments}
          </p>
          <p class="info-item">
            <b>Downloads</b> ${downloads}
          </p>
        </div>          
        <a/>
      </div>`
    }).join('');
  refs.ulList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
console.log('createMarup');
};

function onClickLoadMore() {
  myValue.page += 1;
        getImages().then(data => {
        createMarup(data.hits);
        console.log(data.hits);
    })
};







