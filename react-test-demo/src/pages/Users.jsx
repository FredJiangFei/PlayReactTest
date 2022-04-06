import { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import axios from '../utils/axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get('users?page=2');
    setUsers(res.data.data);
  };

  return (
    <>
      <h1>Users</h1>
      <UserList users={users} />
    </>
  );
};
export default Users;
