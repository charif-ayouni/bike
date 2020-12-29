import { createGlobalStyle } from 'styled-components'
import breakpoints from '../theme/breakpoints'

export default createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@200;300;500&display=swap');
    * {
      box-sizing: border-box;
    }

    html, body {
      font-family: 'Exo 2',sans-serif;
      font-weight: 200;
      width: 100vw;
      overflow-x: hidden;
      margin: 0;
      padding: 0;
    }
    
    body {
      background-color: ${props => props.theme.background};
      transition: all 0.25s linear;
    }
    
    body::-webkit-scrollbar {
      display: none
    }

    ul {
      list-style: none;
      padding: 0;
    }

    a {
      text-decoration: none;

      &:visited {
        color: inherit;
      }
    }
    
    .infinite-scroll-component::-webkit-scrollbar {
      display: none
    }
    
    .infinite-scroll-component {
      -ms-overflow-style: none; 
      scrollbar-width: none;
    }
    .App {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .infinite-scroll-component__outerdiv {
      width: 60% !important;
    }
    .gm-bundled-control ,.gm-bundled-control-on-bottom {
      @media only screen and (max-width: ${breakpoints.sm}px) {
        bottom: 410px!important;
      }
    }
`
