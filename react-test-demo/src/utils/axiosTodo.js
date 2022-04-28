import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3004/',
  // baseURL: 'https://jsonplaceholder.typicode.com/',
});

axiosInstance.interceptors.response.use(
  (res) => res.data,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosInstance;
