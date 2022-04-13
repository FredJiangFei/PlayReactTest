import { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import userService from '../services/userService';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await userService.getUsers(2);
    setUsers(res.data);
  };

  return (
    <>
      <h1>Users</h1>
      <UserList users={users} />
    </>
  );
};
export default Users;
