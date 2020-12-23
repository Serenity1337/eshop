import Home from './Pages/Home'
import { Shop } from './Pages/Shop/Shop'
import { Register } from './Pages/RegisterPage/Register'
import { Login } from './Pages/LoginPage/Login'
import { Contact } from './Pages/Contact/Contact'
import { About } from './Pages/About/About'

export const Routes = [
  {
    path: `/`,
    component: Home,
    exact: true,
    label: 'Home',
  },
  {
    path: `/shop`,
    component: Shop,
    exact: true,
    label: 'Shop',
  },
  {
    path: `/register`,
    component: Register,
    exact: true,
    label: 'Register',
  },
  {
    path: `/login`,
    component: Login,
    exact: true,
    label: 'Login',
  },
  {
    path: `/contact`,
    component: Contact,
    exact: true,
    label: 'Contact',
  },
  {
    path: `/about`,
    component: About,
    exact: true,
    label: 'About',
  },
]
