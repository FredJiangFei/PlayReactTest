import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/api/',
});

axiosInstance.interceptors.response.use(
  (res) => res.data,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosInstance;
