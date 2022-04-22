import axios from '../utils/axios';

const tokenKey = 'token';

const login = (username, password) => {
  return axios.post(`login`, { username, password });
};

const logout = () => {
  localStorage.removeItem(tokenKey);
};

const getCurrentUser = () => {
  return localStorage.getItem(tokenKey);
};

function setJwt(token) {
  localStorage.setItem(tokenKey, token);
}

export default {
  login,
  logout,
  getCurrentUser,
  setJwt,
};
