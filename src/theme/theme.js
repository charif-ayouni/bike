import { typography } from './typography'
const theme = {
  light: {
    background: '#ffffff',
    fontColor: '#000000',
    border: '1px solid rgba(0,0,0,0.125)',
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
