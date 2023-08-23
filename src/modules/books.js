// Книги

// Получение всех книг.
//  Получение информации о книге по её идентификатору.
//  Поиск книг по жанру.
//  Поиск книг по автору.
//  Сортировка книг по цене(по возрастанию или
// убыванию).
// Пагинация списка книг.

import axios from 'axios';

const BASE_URL = `http://localhost:5000`;

export async function getAllBooks() {
  const END_POINT = `/books`;
  const url = BASE_URL + END_POINT;
  // axios.get(url).then(res=>res.data)
  const res = await fetch(url);
  return res.json();
}

export async function getBooksId(id) {
  const END_POINT = `/books?id=${id}`;
  const url = BASE_URL + END_POINT;
  const res = await fetch(url);
  return res.json();
}

export async function getBookGenre(genre) {
  const END_POINT = `/books?genre=${genre}`;
  const url = BASE_URL + END_POINT;
  const res = await fetch(url);
  return res.json();
}

export async function getBookAuthor(author) {
  const END_POINT = `/books?author=${author}`;
  const url = BASE_URL + END_POINT;
  const res = await fetch(url);
  return res.json();
}

export async function getPageBooks(_page, _limit) {
  const END_POINT = `/books?_page=${_page}&_limit=${_limit}`;
  const url = BASE_URL + END_POINT;
  const res = await fetch(url);
  return res.json();
}

export async function getBookPrice(price) {
  const END_POINT = `/books?price=${price}&_sort=amount&_order=desc`;
  const url = BASE_URL + END_POINT;
  const res = await fetch(url);
  return res.json();
}
export async function createBook(book) {
  const options = {
    method: 'POST',
    body: JSON.stringify(book),
    headers: { 'Content-Type': 'application/json' },
  };
  const END_POINT = `/books`;
  const url = BASE_URL + END_POINT;
  const res = await fetch(url, options);
  return res.json();
  // axios.post(url, book);
}

export async function updateBook(id, book) {
  const END_POINT = `/books/${id}`;
  const url = BASE_URL + END_POINT;
  const res = await axios.patch(url, book);
  return res.data;
}

export async function resetBook(id, book) {
  const END_POINT = `/books/${id}`;
  const url = BASE_URL + END_POINT;
  const res = await axios.put(url, book);
  return res.data;
}

export async function deleteBook(id) {
  const options = { method: 'DELETE' };
  const END_POINT = `/books/${id}`;
  const url = BASE_URL + END_POINT;
  const res = await fetch(url, options);
  return res.json();
}
