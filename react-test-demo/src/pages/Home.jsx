import { useSelector } from 'react-redux';
import Greeting from '../components/Greeting';

const Home = () => {
  const { username } = useSelector((state) => state.auth);

  return (
    <>
      <h1>Hello {username}, You are home</h1>
      <Greeting />
    </>
  );
};
export default Home;
