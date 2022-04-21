import HomeLayout from './layouts/Home'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Users from './pages/Users'
import AuthLayout from './layouts/Auth';
import AuthGuard from './components/guards/AuthGuard';

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
        path: 'users',
        element: <Users />,
      },
    ],
  },
  {
    path: '/login',
    element: (
        <AuthLayout />
    ),
    children: [
      {
        path: '',
        element: <Login />,
      }
    ],
  },
]

export default routes
