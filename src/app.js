import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './theme/globalStyle'
import { theme } from './theme/theme'
import Routes from './routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
  const [currentTheme, setCurrentTheme] = useState({
    name: 'light',
    style: theme.light
  })
  useEffect(() => {
    store.subscribe(() => {
      setCurrentTheme(store.getState().themeReducers.currentTheme)
    })
  })
  return (
    <Provider store={store}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <div className='App'>
          <Routes />
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App
