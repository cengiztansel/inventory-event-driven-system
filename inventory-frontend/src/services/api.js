import axios from 'axios';

// Backend adresimiz
const API_URL = 'http://localhost:8080/api/products';

export const getProducts = () => {
    return axios.get(API_URL);
};

export const createProduct = (product) => {
    return axios.post(API_URL, product);
};
