import axios from 'axios';
import { backendURL } from './backendSettings';
let customAxios = axios.create({
    transformRequest: axios.defaults.transformRequest,
    transformResponse: axios.defaults.transformResponse,
    baseURL: backendURL 
});

export default customAxios;