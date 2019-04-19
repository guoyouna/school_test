import Axios from 'axios'

Axios.defaults.baseURL = 'http://127.0.0.1:3030';

Axios.interceptors.response.use(function (config) {
    return config.data;
}, function (error) {
    return Promise.reject(error);
    console.log(error)
});