import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import async from '../components/async'
import WithAuth from '../withAuth'
import Navigation from '../layouts/navigation'
import Header from '../layouts/header'
import Sidenav from '../layouts/sidenav'

const Login = async(() => import('../screens/login'))
const Register = async(() => import('../screens/register'))
const ForgotPassword = async(() => import('../screens/forgotPassword'))
const Home = async(() => import('../screens/home'))
const Locations = async(() => import('../screens/locations'))
//const Return = async(() => import('../screens/return'))
const Profile = async(() => import('../screens/profile'))
const About = async(() => import('../screens/about'))
const Search = async(() => import('../screens/search'))

const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: ForgotPassword
  }
]

const privateRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/locations',
    name: 'locations',
    component: Locations
  },
  {
    path: '/return',
    name: 'return',
    component: Locations
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      {privateRoutes.map(({ path, component: Component }, index) => (
        <WithAuth key={index} path={path} exact component={Component} />
      ))}
      {publicRoutes.map(({ path, component: Component }, index) => (
        <Route
          key={index}
          path={path}
          exact
          render={props => <Component {...props} />}
        />
      ))}
    </Switch>
    <Sidenav />
    <Navigation />
  </Router>
)

export default Routes
