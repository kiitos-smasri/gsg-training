import axios from "axios";

export const axiosInstance = (() => {
  return axios.create({
    baseURL: "https://dummyjson.com",
  });
})();

export const axiosInstance2 = (() => {
  return axios.create({
    baseURL: "https://fakestoreapi.com",
  });
})();
