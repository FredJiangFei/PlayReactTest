import axios from "../utils/axios"
import utils from "../utils/utils";

const getUserName = (id) => {
    const location = utils.getLocation();
    return axios.get(`users/${id}`)
    .then(res => `${res.data.first_name} ${res.data.last_name} ${res.data.email} ${location}`)
    .catch(err=>err.message);
}

export default {
    getUserName
}