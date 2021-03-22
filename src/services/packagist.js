import axios from 'axios'

const http = axios.create({baseURL: 'https://packagist.org/'})

const search = q => http.get('search.json', { params: { q }})

export default {
    search
}