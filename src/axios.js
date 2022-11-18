import axios from "axios";

const axiosInstance = (() => {
  return axios.create({
    baseURL: "http://restapi.adequateshop.com",
  });
})();

export default axiosInstance;
