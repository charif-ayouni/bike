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
      transition: background-color .5s;
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
      transition: margin-left .5s;
      margin-left: ${({ isOpen }) => (isOpen ? 250 : 0)}px;
    }
    .infinite-scroll-component__outerdiv {
      width: 60% !important;
    }
    .gm-bundled-control ,.gm-bundled-control-on-bottom {
      @media only screen and (max-width: ${breakpoints.sm}px) {
        bottom: 410px!important;
      }
    }
    .nice-dates {
      border-top: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;
    }
    .StripeElement {
      box-sizing: border-box;
      height: 40px;
      padding: 10px 12px;
      border: 1px solid transparent;
      border-radius: 4px;
      background-color: white;
      box-shadow: 0 1px 3px 0 #e6ebf1;
      -webkit-transition: box-shadow 150ms ease;
      transition: box-shadow 150ms ease;
    }
    
    .StripeElement--focus {
      box-shadow: 0 1px 3px 0 #cfd7df;
    }
    
    .StripeElement--invalid {
      border-color: #fa755a;
    }
    
    .StripeElement--webkit-autofill {
      background-color: #fefde5 !important;
    }
`
