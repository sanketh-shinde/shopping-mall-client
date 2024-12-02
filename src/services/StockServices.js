import axios from 'axios';
const REST_API_BASE_URL="http://192.168.2.86:8082/api/stocks";

export const getAllStocks = ()=>axios.get(REST_API_BASE_URL);
export const getByCategory = (category) =>axios.get(`${REST_API_BASE_URL}/category/${category}`, category);
export const getByPriceRange =(minPrice , maxPrice) => 
    axios.get(`${REST_API_BASE_URL}/priceRange?minPrice=${minPrice}&maxPrice=${maxPrice}`,minPrice,maxPrice)