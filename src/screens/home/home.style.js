import styled from 'styled-components'
import backgroundImage from '../../assets/images/backgroundSearch.jpg'
const height = 'calc(100vh - 116px)'
export const Container = styled.div`
  position: relative;
  background: #000;
  width: 100vw;
  height: ${height};
`
export const Background = styled.div`
  height: ${height} !important;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Text = styled.h1`
  color: #ffffff;
  font-size: 35px;
  text-align: center;
  text-shadow: 1px 0px 10px rgb(0, 0, 0);
`
