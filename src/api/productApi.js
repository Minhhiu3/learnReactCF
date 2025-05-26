import { data } from "react-router-dom";
import api from ".";

export const addProduct = (data) => api.post("/products", data);

export const getAllProducts = () => api.get("/products");

export const getDetailProduct = (id) => api.get(`/products/${id}`);

export const updateProduct = (id, data) => api.get(`/products/${id}`, data);

export const deleteProduct = (id) => api.get(`/products/${id}`);

