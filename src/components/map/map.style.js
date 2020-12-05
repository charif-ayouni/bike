import styled from 'styled-components'
import breakpoints from '../../theme/breakpoints'

export const Container = styled.div`
  height: ${props => `calc(100vh + ${props.offset}px - 116px)`};
  @media only screen and (max-width: ${breakpoints.sm}px) {
    width: 100%;
    position: fixed;
    top: ${props => `calc(60px - ${props.offset}px)`};
    right: 0;
  }
  @media only screen and (min-width: ${breakpoints.sm}px) {
    width: 40%;
    position: fixed;
    top: ${props => `calc(60px - ${props.offset}px)`};
    right: 0;
  }
`
export const IconContainer = styled.a`
  display: block;
  background: ${props => props.theme.primaryColors.greenDark};
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
`
