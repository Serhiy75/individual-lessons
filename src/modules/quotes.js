// Quotes

// Получение всех цитат.
//  Получение информации о цитате по её идентификатору.
//     Поиск цитат по автору.
//  Поиск цитат по тегу.
//  Получение цитат на определенном языке.
// Получение случайной цитаты.
//  Пагинация списка цитат.
// http://localhost:5000/quotes
 
const BASE_URL = `http://localhost:5000`;

export function getAllQuotes() {
    const END_POINT = `/quotes`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getIdQuotes(id) {
    const END_POINT = `/quotes?id=${id}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};
export function getAuthorQuotes(author) {
    const END_POINT = `/quotes?author=${author}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getTagQuotes(tag) {
    const END_POINT = `/quotes?tag=${tag}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getLangQuotes(lang) {
    const END_POINT = `/quotes?lang=${lang}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getRandomQuotes() {
    let id = Math.round(Math.random() * 100);
    const END_POINT = `/quotes?id=${id}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());  
}
export function getPageQuotes(_page, _limit) {
    const END_POINT = `/quotes?_page=${_page}&_limit=${_limit}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};