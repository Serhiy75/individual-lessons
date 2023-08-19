

export function searchRecipe(q) {
  const BASE_URL = 'https://edamam-recipe-search.p.rapidapi.com';
  const END_POINT = '/search?';
  const PARAMS = new URLSearchParams({q});
  const url = BASE_URL + END_POINT + PARAMS;
  const options = {  headers: {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
  },}
  return fetch(url, options).then(res => res.json())
};


