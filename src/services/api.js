import axios from 'axios';

const api = axios.create({
    baseURL: 'http://tindev-back-end.herokuapp.com/:3333'
}); 

export default api;
