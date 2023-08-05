// Получение всех автомобилей.
//  Получение информации об автомобиле по его
// идентификатору. 
// Поиск автомобилей по марке.
// Поиск автомобилей по модели.
// Пагинация списка автомобилей.

import axios from "axios";

const BASE_URL = `http://localhost:5000`;

export function getAllCars() {
    
    const END_POINT = `/cars`;
    const URL = BASE_URL + END_POINT;
    return fetch(URL).then(res => res.json());
};

export function getInfoCars(id) {
      const END_POINT = `/cars?id=${id}`;
    const URL = BASE_URL + END_POINT;
    return fetch(URL).then(res => res.json());
};

export function getCarsByMarka(marka) {
    
       const END_POINT = `/cars?marka=${marka}`;
    const URL = BASE_URL + END_POINT;
    return fetch(URL).then(res => res.json());
};

export function getCarsByModel(model) {
        const END_POINT = `/cars?model=${model}`;
    const URL = BASE_URL + END_POINT;
    return fetch(URL).then(res => res.json());
};

export function getCarsByPage(page, limit ) {
    const END_POINT = `/cars?_page=${page}&_limit=${limit}`;
    const URL = BASE_URL + END_POINT;
    return fetch(URL).then(res => res.json()); 
};


// =====================
export function createCars(car) {
    const END_POINT = `/cars`;
    const url = BASE_URL + END_POINT;
    return axios.post(url, car).then(res => res.data);
};

export function updateCars(id, car) {
    const END_POINT = `/cars/${id}`;
    const url = BASE_URL + END_POINT;
    return axios.patch(url, car).then(res => res.data);
};

export function resetCars(id, car) {
    const END_POINT = `/cars/${id}`;
    const url = BASE_URL + END_POINT;
    return axios.put(url, car).then(res => res.data);
};

export function deleteCars(id) {
    const END_POINT = `/cars/${id}`;
    const url = BASE_URL + END_POINT;
    return axios.delete(url).then(res => res.data);
};