import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const WithAuth = ({ component: Component, ...rest }) => {
  const loggedIn = true // Super Authentification
  return (
    <Route
      {...rest}
      render={props => {
        return loggedIn ? <Component {...props} /> : <Redirect to='/login' />
      }}
    />
  )
}

export default WithAuth
