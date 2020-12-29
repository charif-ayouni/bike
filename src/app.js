import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './theme/globalStyle'
import { theme } from './theme/theme'
import Routes from './routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import firebase from './services/firebase'
import { AuthProvider } from './context/authContext'
import { useSidenav } from './context/sidenavContext'

const App = () => {
  const { open } = useSidenav()
  const [currentTheme, setCurrentTheme] = useState({
    name: 'light',
    style: theme.light
  })
  useEffect(() => {
    store.subscribe(() => {
      setCurrentTheme(store.getState().themeReducers.currentTheme)
    })
    const message = firebase.messaging()
    message
      .requestPermission()
      .then(() => {
        return message.getToken()
      })
      .then(token => localStorage.setItem('notification-token', token))
      .catch(err => console.log('ERROR : ', err))
  })
  return (
    <AuthProvider>
      <Provider store={store}>
        <ThemeProvider theme={currentTheme.style}>
          <GlobalStyle theme={currentTheme.style} isOpen={open} />
          <div className='App'>
            <Routes />
          </div>
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  )
}

export default App
