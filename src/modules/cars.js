// Получение всех автомобилей.
//  Получение информации об автомобиле по его
// идентификатору.
// Поиск автомобилей по марке.
// Поиск автомобилей по модели.
// Пагинация списка автомобилей.

import axios from 'axios';

const BASE_URL = `http://localhost:5000`;

export async function getAllCars() {
  const END_POINT = `/cars`;
  const URL = BASE_URL + END_POINT;
  const res = await fetch(URL);
  return res.json();
}

export async function getInfoCars(id) {
  const END_POINT = `/cars?id=${id}`;
  const URL = BASE_URL + END_POINT;
  const res = await fetch(URL);
  return res.json();
}

export async function getCarsByMarka(marka) {
  const END_POINT = `/cars?marka=${marka}`;
  const URL = BASE_URL + END_POINT;
  const res = await fetch(URL);
  return res.json();
}

export async function getCarsByModel(model) {
  const END_POINT = `/cars?model=${model}`;
  const URL = BASE_URL + END_POINT;
  const res = await fetch(URL);
  return res.json();
}

export async function getCarsByPage(page, limit) {
  const END_POINT = `/cars?_page=${page}&_limit=${limit}`;
  const URL = BASE_URL + END_POINT;
  const res = await fetch(URL);
  return res.json();
}

// =====================
export async function createCars(car) {
  const END_POINT = `/cars`;
  const url = BASE_URL + END_POINT;
  const res = await axios.post(url, car);
  return res.data;
}

export async function updateCars(id, car) {
  const END_POINT = `/cars/${id}`;
  const url = BASE_URL + END_POINT;
  const res = await axios.patch(url, car);
  return res.data;
}

export async function resetCars(id, car) {
  const END_POINT = `/cars/${id}`;
  const url = BASE_URL + END_POINT;
  const res = await axios.put(url, car);
  return res.data;
}

export async function deleteCars(id) {
  const END_POINT = `/cars/${id}`;
  const url = BASE_URL + END_POINT;
  const res = await axios.delete(url);
  return res.data;
}
