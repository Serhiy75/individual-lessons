// Книги

// Получение всех книг.
//  Получение информации о книге по её идентификатору.
//  Поиск книг по жанру.
//  Поиск книг по автору.
//  Сортировка книг по цене(по возрастанию или
// убыванию). 
// Пагинация списка книг.

import axios from 'axios'

const BASE_URL = `http://localhost:5000`;

export function getAllBooks() {
    const END_POINT = `/books`;
    const url = BASE_URL + END_POINT;
    // axios.get(url).then(res=>res.data)
    return fetch(url).then(res => res.json());
};

export function getBooksId(id) {
   const END_POINT = `/books?id=${id}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getBookGenre(genre) {
    const END_POINT = `/books?genre=${genre}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getBookAuthor(author) {
    const END_POINT = `/books?author=${author}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getPageBooks(_page, _limit) {
    const END_POINT = `/books?_page=${_page}&_limit=${_limit}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getBookPrice(price) {
    const END_POINT = `/books?price=${price}&_sort=amount&_order=desc`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};
export function createBook(book) { 
    const options = {
        method: 'POST', body: JSON.stringify(book),
        headers: { 'Content-Type': 'application/json' }
    }
    const END_POINT = `/books`;
    const url = BASE_URL + END_POINT;
    return fetch(url, options).then(res => res.json());
    axios.post(url, book);
}

export function updateBook(id, book) { 
    const END_POINT = `/books/${id}`;
    const url = BASE_URL + END_POINT;
    return axios.patch(url, book).then(res => res.data);
}

export function resetBook(id, book) { 
    const END_POINT = `/books/${id}`;
    const url = BASE_URL + END_POINT;
    return axios.put(url, book).then(res => res.data);
}

export function deleteBook(id) { 
    const options = {method: 'DELETE'}
    const END_POINT = `/books/${id}`;
    const url = BASE_URL + END_POINT;
    return fetch(url, options).then(res => res.json())

};





