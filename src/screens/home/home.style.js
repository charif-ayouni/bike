import styled from 'styled-components'
import backgroundImage from '../../assets/images/backgroundSearch.jpg'
import breakpoints from '../../theme/breakpoints'
const height = 'calc(100vh - 116px)'
export const Container = styled.div`
  position: relative;
  background: #000;
  width: 100vw;
  @media (max-width: ${breakpoints.md}px) {
    height: ${height};
  }
  @media (min-width: ${breakpoints.md}px) {
    height: 100%;
  }
`
export const Background = styled.div`
  @media (max-width: ${breakpoints.md}px) {
    height: ${height} !important;
  }
  @media (min-width: ${breakpoints.md}px) {
    height: 100vh !important;
  }
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  opacity: 0.5;
`
export const Inner = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: ${height} !important;
  padding: 40px;
  display: flex;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    justify-content: flex-start;
    overflow-x: hidden;
  }
  @media only screen and (min-width: ${breakpoints.sm}px) {
    justify-content: center;
  }
  align-items: center;
  flex-direction: column;
`
export const Text = styled.h1`
  color: #ffffff;
  font-size: 35px;
  @media screen and (max-width: ${breakpoints.sm}px) {
    font-size: 25px !important;
  }
  text-align: center;
  text-shadow: 1px 0px 10px rgb(0, 0, 0);
`
