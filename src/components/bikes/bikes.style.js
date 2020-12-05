import styled from 'styled-components'
import breakpoints from '../../theme/breakpoints'

export const Container = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`
export const Wrapper = styled.div`
  @media only screen and (max-width: ${breakpoints.sm}px) {
    width: 100%;
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;
    z-index: 999;
    position: fixed;
    bottom: 100px;
    height: 300px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media only screen and (min-width: ${breakpoints.sm}px) {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    padding: 2.5rem 20px 4rem;
    width: 60%;
  }
`
export const Button = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 70px;
  border: none;
  border-radius: 2px;
  z-index: 99;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    left: 10px;
  }
  @media only screen and (min-width: ${breakpoints.sm}px) {
    left: 40px;
  }
`
