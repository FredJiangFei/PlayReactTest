import { useEffect, useState } from "react"
import axios from "../utils/axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      getUsers();
    }, [])
    
    const getUsers = async () => {
        const res = await axios.get('users?page=2');
        setUsers(res.data.data);
    }

    return (
        <>
            <h1>Users</h1>
            {users.map(x=>(<p key={x.id}>{`${x.first_name} ${x.last_name}`}</p>))}
        </>
    )
}
export default Users;