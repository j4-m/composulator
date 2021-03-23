import axios from 'axios'

const http = axios.create({baseURL: 'https://packagist.org/'})

const search = q => {
    return http.get('search.json', { params: { q, per_page: 10 }})
        .then(r => r.data.results)
}

const packagist = {
    search
}

export default packagist