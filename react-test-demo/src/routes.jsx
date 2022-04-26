import HomeLayout from './layouts/Home'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'
import AuthLayout from './layouts/Auth'
import AuthGuard from './components/guards/AuthGuard'
import Todo from './pages/ToDo'

const routes = [
  {
    path: '/',
    element: (
      <AuthGuard>
        <HomeLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'todos',
        element: <Todo />,
      },
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        path: '',
        element: <Login />,
      },
    ],
  },
  {
    path: '*',
    children: [
      {
        path: '',
        element: <NoMatch />,
      },
    ],
  },
]

export default routes
