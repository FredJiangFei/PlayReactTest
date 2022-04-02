import { useSelector } from 'react-redux'

const Home = () => {
  const { username } = useSelector((state) => state.auth)

  return <h1>Hello {username}, You are home</h1>
}
export default Home
