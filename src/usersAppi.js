import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
const END_POINT = '/users?';


export function createUser (user) {
    
const url = BASE_URL + '/users';
return axios.post(url, user).then(res => res.data);

};

export function checkUser (login, password) {
    const PARAMS = new URLSearchParams({login: login, password: password})
    const url = BASE_URL + END_POINT + PARAMS
    return axios.get(url).then(res => res.data);
};

export function getUser (login) {
    const PARAMS = new URLSearchParams({login: login})
    const url = BASE_URL + END_POINT + PARAMS
    return axios.get(url).then(res => res.data);
};
