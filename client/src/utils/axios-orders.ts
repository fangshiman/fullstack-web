import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosOrder = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  instance.interceptors.request.use(
    async config => {
      return config;
    },
    async error => {
      return await Promise.reject(error);
    }
  );

  return instance;
};

export default axiosOrder;