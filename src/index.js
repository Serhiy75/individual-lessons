

import { getNews, } from './news-api.js';

const refs = {
  userForm: document.querySelector('.js-form'),
  userInput: document.querySelector('.js-userValue'),
  userList: document.querySelector('.js-news'),
  box: document.querySelector('.js-box'),
};

refs.userForm.addEventListener('submit', onUserFormSubmit);
let userInput;
function onUserFormSubmit(evt) {
  evt.preventDefault();
  userInput = refs.userForm.elements.userValueName.value;
  getNews(userInput).then((news => {
    console.log(news);
    refs.userList.innerHTML = '';
    renderMarkup(news.articles);
    observer.observe(refs.box);
    page = 1;
  }))
  
};

function createMarkup({media, author, summary,title, published_date}) {
  return `
        <li class="card news-card">
  <div class="news-image">
    <img src="${media}" alt="${title}" />
  </div>

  <h3 class="card-title">${title}</h3>
  <p class="card-desc">${summary}</p>
  <div class="card-footer">
    <span>${author}</span>
    <span>${published_date}</span>
  </div>
</li>`
};

function renderMarkup(array) {
  const markup = array.map(createMarkup).join('');
  refs.userList.insertAdjacentHTML('beforeend', markup);
};

let page = 1;

const observer = new IntersectionObserver((array) => {
  array.forEach((el) => {
    if (el.isIntersecting === false) {
      return
    } else {
      page += 1;
      getNews(userInput, page).then((news) => {
        renderMarkup(news.articles)
      })
    }
  })
})

