import { getMoviesByKeyWord, getMovieById, } from './mooviesapi.js';

const refs = {
  userFormMovies: document.querySelector('.js-formsearch'),
  ulList: document.querySelector('.js-list'),
  divRight: document.querySelector('.js-right'),
};

refs.userFormMovies.addEventListener('submit', onSubmitForm);
refs.ulList.addEventListener('click', onListClick);

function onSubmitForm(evt) {
  evt.preventDefault();
  const inputValue = refs.userFormMovies.elements.name.value;
  getMoviesByKeyWord(inputValue).then(movie => {
    renderMarkup(movie.results)
  })

};

function renderMarkup(array) {
  const markup = array.map(({imdb_id, title}) => {
    return `
     <li data-id="${imdb_id}">${title}</li>`
  }).join('');
  refs.ulList.innerHTML = markup;
};

function onListClick(evt) {
  const listId = evt.target.dataset.id;
  getMovieById(listId).then(movie => {
    console.log(movie.results);
    renderMovie(movie.results)
  })
};

function renderMovie({banner, content_rating, release, description, trailer, title, year, movie_length
}) {
  
  const markup = `
  <div id="modal" class="modal">
        
        <img
          src="${banner}"
          alt="Movie Poster"
          class="movie-poster"
        />
        <h1 class="movie-title">${title}</h1>
        <p class="movie-year">Year:${year}</p>
        <p class="movie-description">${description}</p>
        <p class="movie-rating">${content_rating}</p>
        <p class="movie-duration">Duration:${movie_length}</p>
        <p class="movie-release">Release Date:${release}</p>
        <iframe width="560" height="315" src="${trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
    </div>`
  refs.divRight.innerHTML = markup
};






const userLokalStoreg = JSON.parse(localStorage.getItem('user'));
console.log(userLokalStoreg);
if(userLokalStoreg){
} else {
  location.pathname = '/registration.html'
}

const btnLogout = document.querySelector('.js-logout');

btnLogout.addEventListener('click', onBtnLogoutClic);

function onBtnLogoutClic (evt){
    localStorage.removeItem('user');
    location.pathname = '/autorization.html';

};