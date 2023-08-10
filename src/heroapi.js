// https://superhero-search.p.rapidapi.com/api/
// headers: {
//     'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
//     'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
//   }
import axios from 'axios';

export function getHero(hero) {
    const BASE_URL = 'https://superhero-search.p.rapidapi.com/api/';
    const END_POINT = '?';
    const PARAMS = new URLSearchParams({hero: hero});
    const url = BASE_URL + END_POINT + PARAMS;
   return axios.get(url, { headers: {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
  }}).then(res => res.data)
};
