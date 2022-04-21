import axios from "../utils/axios"

const tokenKey = 'token';

const login = async (username, password) => {
    localStorage.setItem(tokenKey, '123');
}

const logout = () => {
    localStorage.removeItem(tokenKey);
}

const getCurrentUser =  () => {
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    logout,
    getCurrentUser,
};
