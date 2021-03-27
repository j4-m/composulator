import axios from 'axios'

const http = axios.create({baseURL: 'https://packagist.org/'})

const getReleases = name => {
    return http.get(`p2/${name}.json`)
        .then(r => r.data.packages[name])
}

const getBranches = name => {
    return http.get(`p2/${name}~dev.json`)
        .then(r => r.data.packages[name])
}

const search = q => {
    return http.get('search.json', { params: { q, per_page: 10 }})
        .then(r => r.data.results)
}

const packagist = {
    search,
    getReleases,
    getBranches
}

export default packagist