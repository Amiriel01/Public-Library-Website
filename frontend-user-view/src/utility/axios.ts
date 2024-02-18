import axios from 'axios';
let customAxios = axios.create({
    transformRequest: axios.defaults.transformRequest,
    transformResponse: axios.defaults.transformResponse,
    baseURL: import.meta.env.DEV ? "http://localhost:3000/" : "https://public-library-backend.fly.dev/"
});

export default customAxios;