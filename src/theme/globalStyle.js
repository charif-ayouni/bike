import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    
    * {
      box-sizing: border-box;
    }

    html, body {
      font-family: Arial,sans-serif;
      width: 100vw;
      overflow-x: hidden;
      margin: 0;
      padding: 0;
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
`
