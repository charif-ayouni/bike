import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './theme/globalStyle'
import { theme } from './theme/theme'
import Routes from './routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { messaging } from './services/firebase'
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

    messaging()
      .then(token => {
        localStorage.setItem('fcm-token', token)
      })
      .catch(err => {
        console.log('An error occurred while retrieving token. ', err)
      })

    const registerPushListener = () =>
      navigator.serviceWorker.addEventListener('message', ({ data }) =>
        console.log(data)
      )
    registerPushListener()
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
