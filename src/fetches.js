// https://pixabay.com/api/?key=37549280-c708feca670f76edfee67d8a3&q


export const myValue = {
    query: '', // cats
    page:1
}

export function getImages() {
    const BASE_URL = 'https://pixabay.com/api/?';
    const Params = new URLSearchParams({
        key: '37549280-c708feca670f76edfee67d8a3',
        q: myValue.query,//cats
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: myValue.page
    });
    const url = BASE_URL + Params;
    return fetch(url).then(res => res.json());

};



