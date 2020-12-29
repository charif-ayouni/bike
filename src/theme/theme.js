import { typography } from './typography'
const theme = {
  light: {
    background: '#ffffff',
    fontColor: '#000000',
    border: '1px solid rgba(0,0,0,0.125)',
    toggleBorder: '#fff',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    primaryColors: {
      greenDark: '#2c570a',
      greenLight: '#8bc345',
      blueDark: '#004973'
    },
    secondaryColors: {
      greenTransparent: '#2c570a33'
    },
    navigationColors: {},
    typography: typography
  },
  dark: {
    background: '#171717',
    fontColor: '#ffffff',
    border: '1px solid #eaeaea66',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
    primaryColors: {
      greenDark: '#8bc345',
      greenLight: '#8bc345',
      blueDark: '#004973'
    },
    secondaryColors: {
      greenTransparent: '#2c570a33'
    },
    navigationColors: {},
    typography: typography
  }
}
export { theme }
