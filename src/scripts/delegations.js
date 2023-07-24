import { users, albums, photos } from './data.js';

const userListElem = document.querySelector('.js-user-list');

userListElem.addEventListener('click', onClickUser);

function renderUsers() {
    const murkup = users.map(({ id, name } ) => {
        return `
       <li class="user-item" data-id="${id}">${name}</li> `
    }).join(''); 
    userListElem.innerHTML = murkup;
};
renderUsers();

function onClickUser(evt) {
    
    if (evt.currentTarget === evt.target) {
        return;
    }
    const userAlboms = albums.filter(({userId}) => {
    return userId === +evt.target.dataset.id
    })
    renderAlbums(userAlboms);
    userPhotosElem.innerHTML = '';
    console.log(evt.target.dataset.id);
}

const userAlbomsElem = document.querySelector('.js-album-list');
userAlbomsElem.addEventListener('click', onClickUserAlbom);

function renderAlbums(albums) {
    const markup = albums.map(({ id, title }) => {
        return `
      <li class="album" data-id ="${id}">${title}</li>`
    }).join('');
    userAlbomsElem.innerHTML = markup;

};

function onClickUserAlbom(evt) {
      if (evt.currentTarget === evt.target) {
        return;
      }
      const userPhotos = photos.filter(({albumId}) => {
    return albumId === +evt.target.dataset.id
    })
    renderPhotos(userPhotos);
    console.log(evt.target.dataset.id);
}

const userPhotosElem = document.querySelector('.js-photo-list');


function renderPhotos(photos) {
    const markup = photos.map(({id,title,thumbnailUrl}) => {
        return `
      <li data-id="${id}">
      <img src="${thumbnailUrl}" alt="${title}">
      </li>  `
    }).join('');
    userPhotosElem.innerHTML = markup;
};