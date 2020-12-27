import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../context/authContext'

// eslint-disable-next-line react/prop-types
const WithAuth = ({ component: Component, ...rest }) => {
  const { user } = useAuth()
  return (
    <Route
      {...rest}
      render={props => {
        return user ? <Component {...props} /> : <Redirect to='/login' />
      }}
    />
  )
}

export default WithAuth
