import { create } from 'axios';
export let url;

if (process.env.NODE_ENV !== 'production'){
    url = 'http://localhost:4000/api'
} else {
    url = '/api'
}

export const api = create({
    baseURL: url
})