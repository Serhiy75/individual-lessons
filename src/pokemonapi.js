export async function getPokemons() {
  const BASE_URL = 'https://pokeapi.co/api/v2/';
  const END_POINT = 'pokemon?';
  const params = new URLSearchParams({
    limit: 21,
    offset: 0,
  });
  const url = BASE_URL + END_POINT + params;
  const res = await fetch(url);
  return res.json();
}
export async function getUrlPokemons(url) {
  const res = await fetch(url);
  return res.json();
}
