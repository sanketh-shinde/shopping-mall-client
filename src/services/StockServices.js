import axios from "axios";

const REST_API_BASE_URL = "http://10.0.0.19:8082/api/stocks";

export const getAllStocks = () => axios.get(REST_API_BASE_URL);

export const getByCategory = (category) => {
  if (!category) {
    // throw new Error("Category is required.");
  }
  return axios.get(`${REST_API_BASE_URL}/category/${category}`);
};

export const getByPriceRange = (minPrice, maxPrice) => {
  if (minPrice == null || maxPrice == null) {
    throw new Error("Both minPrice and maxPrice are required.");
  }
  return axios.get(`${REST_API_BASE_URL}/priceRange`, {
    params: {
      minPrice,
      maxPrice,
    },
  });
};

export const deleteProduct = (id) => axios.delete(`${REST_API_BASE_URL}/${id}`);

export const updateProduct = (id, price) =>
  axios.put(`${REST_API_BASE_URL}/updatePrice`, null, {
    params: {
      id,
      price,
    },
  });

export const createStocks = (stock) =>
  axios.post(`${REST_API_BASE_URL}`, stock);

export const findStockById = (id) =>
  axios.get(`${REST_API_BASE_URL}/${id}`, id);
