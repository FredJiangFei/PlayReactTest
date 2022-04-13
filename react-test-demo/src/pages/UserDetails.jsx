import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import userService from '../services/userService';

const UserDetails = () => {
  const location = useLocation();
  const  userId = location.state?.userId;
  const [useName, setUserName] = useState('');

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await userService.getUserName(7);
    setUserName(res);
  };

  return (
    <>
      <h1>Hello, {useName}</h1>
    </>
  );
};
export default UserDetails;
