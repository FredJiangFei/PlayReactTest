import axios from "../utils/axios"

const getUsers = (page) => {
   return axios.get(`users?page=${page}`);
}

const getUserName = (id) => {
    return axios.get(`users/${id}`)
    .then(res => `${res.data.first_name} ${res.data.last_name} ${res.data.email}`);
}

const login = (email, password) => {
    return axios.post(`login`, { email, password });
}

export default {
    login,
    getUsers,
    getUserName
}