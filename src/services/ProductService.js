import axios from 'axios';

const getAllProducts = () => {
    return axios.get(`${process.env.REACT_APP_BaseUrl}/products/`)
}

const getProductById = (id) => {
    return axios.get(`${process.env.REACT_APP_BaseUrl}/products/${id}`)
}
const addProduct = (data) => {
    return axios.post(`${process.env.REACT_APP_BaseUrl}/products/`, data)
}
const updateProductById = (id, data) => {
    return axios.put(`${process.env.REACT_APP_BaseUrl}/products/${id}`, data)
}
const deleteProductById = (id) => {
    return axios.delete(`${process.env.REACT_APP_BaseUrl}/products/${id}`)
}

const productService = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProductById,
    deleteProductById,
}
export default productService