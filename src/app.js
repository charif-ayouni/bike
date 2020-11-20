import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './theme/globalStyle'
import { theme } from './theme/theme'
import Routes from './routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='App'>
        <Routes />
      </div>
    </ThemeProvider>
  )
}

export default App
