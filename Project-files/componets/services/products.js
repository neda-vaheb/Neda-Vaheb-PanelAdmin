import { useQuery } from "@tanstack/react-query";
import api from "../config/api";

const useGetAllProducts = (page) => {
  const queryFn = () => api.get(`products?page=${page}&limit=10`);
  const queryKey = ["all-products", page];

  return useQuery({ queryFn, queryKey });
};
const postProduct = (data) => {
  const { name, price, quantity } = data;
  return api.post("http://localhost:3000/products", {
    name: `${name}`,
    price: price,
    quantity: quantity,
  });
};
const deleteProduct = (id) => {
  return api.delete(`http://localhost:3000/products/${id}`);
};

const putProduct = (data) => {
  const { id, name, price, quantity } = data;
  return api.put(`http://localhost:3000/products/${id}`, {
    name: `${name}`,
    price: price,
    quantity: quantity,
  });
};
export { useGetAllProducts, postProduct, deleteProduct, putProduct };
