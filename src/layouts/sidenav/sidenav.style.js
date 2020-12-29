import styled from 'styled-components'
import breakpoints from '../../theme/breakpoints'

export const Container = styled.div`
  @media (max-width: ${breakpoints.md}px) {
    display: none !important;
  }
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? 300 : 0)}px;
  position: fixed;
  z-index: 999;
  top: 0;
  left: -3px;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  border-right: 3px solid #3b74bd;
  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
    &:hover {
      color: #f1f1f1;
    }
  }
`
export const Close = styled.a`
  position: absolute;
  top: 5px;
  right: 10px;
  margin-left: 50px;
  svg {
    font-size: 36px;
    color: #3b74bd;
    &:hover {
      transition: 0.5s;
      color: #264a77;
    }
  }
`
