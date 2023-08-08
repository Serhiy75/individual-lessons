
export function getPokemons() {
    const BASE_URL = 'https://pokeapi.co/api/v2/';
    const END_POINT = 'pokemon?';
    const params = new URLSearchParams({
        limit: 21,
        offset: 0,
    })
    const url = BASE_URL + END_POINT + params;
   return fetch(url).then(res => res.json());

};
export function getUrlPokemons(url) {
    return fetch(url).then(res => res.json());
};
