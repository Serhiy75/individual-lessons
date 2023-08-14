
export function getNews(query, page = 1) {
    const BASE_URL = `https://free-news.p.rapidapi.com`;
    const END_POINT = `/v1/search?`
    const PARAMS = new URLSearchParams({
        q: query,
        page: page,
    })
    const url = BASE_URL + END_POINT + PARAMS;
    const option = {
        headers: {
            'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
            'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
        }
    }
    return fetch(url, option).then(res => res.json());
}