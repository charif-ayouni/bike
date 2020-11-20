import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import async from '../components/async'
import WithAuth from '../withAuth'

const Login = async(() => import('../screens/login'))
const Home = async(() => import('../screens/home'))
const Locations = async(() => import('../screens/locations'))
const Return = async(() => import('../screens/return'))
const Profile = async(() => import('../screens/profile'))
const About = async(() => import('../screens/about'))

const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const privateRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/locations',
    name: 'locations',
    component: Locations
  },
  {
    path: '/return',
    name: 'return',
    component: Return
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
  </Router>
)

export default Routes
