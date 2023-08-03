// Получение всех автомобилей.
//  Получение информации об автомобиле по его
// идентификатору. 
// Поиск автомобилей по марке.
// Поиск автомобилей по модели.
// Пагинация списка автомобилей.

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