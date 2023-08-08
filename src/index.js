import {getPokemons, getUrlPokemons, } from './pokemonapi'

const refs = {
  pokemonElem: document.querySelector('.js-pokemons-list'),
  btnPrev: document.querySelector('.js-btn-prev'),
  btnNext: document.querySelector('.js-btn-next'),
  modalElem: document.querySelector('.modal'),
};
refs.btnPrev.addEventListener('click', onClickBtn);
refs.btnNext.addEventListener('click', onClickBtn);
refs.pokemonElem.addEventListener('click', onListClick);
refs.modalElem.addEventListener('click', onCloseModal);



function onCloseModal(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal()
  }
}

function onClickBtn(evt) {
  getUrlPokemons(evt.target.dataset.url).then((data) => {
    console.log(data);
      createMurkup(data.results);
  refs.btnPrev.setAttribute('data-url', data.previous);
  refs.btnNext.setAttribute('data-url', data.next);
    refs.btnPrev.disabled = data.previous === null;
  });
 
};
function onListClick(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
  console.log(evt.target.dataset.url);
  getUrlPokemons(evt.target.dataset.url).then(pokemon =>  createModalMurkup(pokemon))

}



getPokemons().then((data) => {
  console.log(data);
  createMurkup(data.results);
  refs.btnPrev.setAttribute('data-url', data.previous);

  refs.btnNext.setAttribute('data-url', data.next);
   refs.btnPrev.disabled = data.previous === null;
})

function createMurkup(pokemons) {
  const murkup = pokemons.map(({name, url}) => {
    return `
    <li class="pokemon-item" data-url="${url}">name${name}</li>`
  }).join('');
  refs.pokemonElem.innerHTML = murkup;
};

function createModalMurkup({id, weight, height, name, base_experience, sprites:{front_default, back_default
}, 
}) {
  const murkup = `<div class="modal-content">
  <h1 class="pokemon-name">${name} - Pokemon Details</h1>
  <img data-back="${back_default}" data-front="${front_default}"
    class="pokemon-image js-pocimage"
    src="${front_default}"
    alt="${name}"
  />

  <h2 class="section-title">Basic Information</h2>
  <ul class="info-list">
    <li>ID: ${id}</li>
    <li>Height: ${height} decimetres</li>
    <li>Weight: ${weight} grams</li>
    <li>Base Experience: ${base_experience}</li>
  </ul>
</div>`
  refs.modalElem.innerHTML = murkup;
  showModal()
};

function showModal() {
  refs.modalElem.style.display = 'flex'
  const imageElem = document.querySelector('.js-pocimage');
  imageElem.addEventListener('mouseover', onImageOver);
  imageElem.addEventListener('mouseout', onImageOut);
};


function closeModal() {
   const imageElem = document.querySelector('.js-pocimage');
  imageElem.removeEventListener('mouseover', onImageOver);
  imageElem.removeEventListener('mouseout', onImageOut);
  refs.modalElem.style.display = 'none'
};

function onImageOver(evt) { 
  const url = evt.target.dataset.back;
  evt.target.src = url
};

function onImageOut(evt) { 
  const url = evt.target.dataset.front;
  evt.target.src = url
};
 

