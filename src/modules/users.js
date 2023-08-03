
const BASE_URL = `http://localhost:5000`;

export function getAllUsers() {
    const END_POINT = `/users`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getUsersId(id) {
    const END_POINT = `/users?id=${id}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getUsersName(name) {
    const END_POINT = `/users?name=${name}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getUsersAge(age) {
    const END_POINT = `/users?age=${age}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getUsersCity(city) {
    const END_POINT = `/users?city=${city}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getUsersEmail(email) {
    const END_POINT = `/users?email=${email}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getUsersPhone(phone) {
    const params =new URLSearchParams({phone})
    const END_POINT = `/users?${params}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

