import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tindev-back-end.herokuapp.com/'
}); 

export default api;
