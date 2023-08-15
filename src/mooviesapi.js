
const BESE_URL = 'https://moviesminidatabase.p.rapidapi.com/movie';

export function getMoviesByKeyWord(keyword) {

    const END_POINT = `/byKeywords/${keyword}/`
    const options = {
        headers: {
            'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    }
    const url = BESE_URL + END_POINT;
    return fetch(url, options).then(res => res.json());
};

export function getMovieById(id) {
    const END_POINT = `/id/${id}/`;
    const url = BESE_URL + END_POINT;
    const options = {
       headers: {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  }   
    }
    return fetch(url, options).then(res => res.json());
};







// https://rapidapi.com/SAdrian/api/moviesminidatabase/
