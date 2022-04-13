import axios from "../utils/axios"

const getUsers = (page) => {
   return axios.get(`users?page=${page}`);
}

export default {
    getUsers
}