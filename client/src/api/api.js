import { create } from 'axios';
let url;

if (process.env.NODE_ENV !== 'production'){
    url = 'http://localhost:4000/api'
} else {
    url = '/api'
}


const api = create({
    baseURL: url
})

export default api