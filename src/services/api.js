import axios from 'axios';

const api = axios.create({
    baseURL: 'http://tindev-back-end.herokuapp.com/'
}); 

export default api;
