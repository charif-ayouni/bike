import styled from 'styled-components'
import breakpoints from '../../../../theme/breakpoints'

export const Location = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`
export const Title = styled.h2`
  color: ${props => props.theme.fontColor};
  font-size: 22px;
  margin: 0;
`
export const Text = styled.p`
  color: ${props => props.theme.fontColor};
`
export const Row = styled.div`
  display: flex;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    flex-wrap: wrap;
  }
  @media only screen and (min-width: ${breakpoints.sm}px) {
    flex-wrap: nowrap;
  }
  ${props => (props.border ? 'border-bottom: 1px solid #eaeaea;' : '')}
  ${props => (props.direction ? `flex-direction: ${props.direction}` : '')}
`
export const Picture = styled.img`
  @media only screen and (max-width: ${breakpoints.sm}px) {
    width: 100%;
    height: auto;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media only screen and (min-width: ${breakpoints.sm}px) {
    margin-right: 30px;
    width: 230px;
    height: 157px;
  }
`
export const Column = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    width: 90%;
  }
  @media only screen and (min-width: ${breakpoints.sm}px) {
    width: 100%;
  }
  ${props => (props.width ? `width: ${props.width}%!important;` : '')}
  ${props => (props.direction ? `flex-direction: ${props.direction};` : '')}
  ${props => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
`
export const Button = styled.a`
  color: ${props => props.theme.fontColor};
  font-size: 60px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    font-size: 65px;
    cursor: pointer;
    background: ${props => props.theme.primaryColors.blueDark};
    color: #ffffff;
    transition: all 1s ease-out;
    opacity: 0.6;
  }
`
export const Span = styled.span`
  color: ${props => props.theme.fontColor};
`
