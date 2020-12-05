import styled from 'styled-components'
import breakpoints from '../../theme/breakpoints'

export const Card = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
  background-color: ${props => props.theme.background};
  background-clip: border-box;
  border: ${props => props.theme.border};
  border-radius: 0.25rem;
  margin: 20px;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    width: 100%;
    height: 250px;
  }
  @media only screen and (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px) {
    width: calc(100% / 2 - 40px);
    height: 350px;
  }
  @media only screen and (min-width: ${breakpoints.md}px) {
    width: calc(100% / 3 - 40px);
    height: 310px;
  }
`
export const Header = styled.img`
  @media only screen and (max-width: ${breakpoints.md}px) {
    width: calc(80vw);
    height: 50%;
  }
  @media only screen and (min-width: ${breakpoints.md}px) {
    width: 100%;
    height: 180px;
  }
  display: block;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  vertical-align: middle;
  border-style: none;
`
export const CardBody = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
`
export const Title = styled.h5`
  color: ${props => props.theme.fontColor};
  margin-top: 0;
  margin-bottom: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media only screen and (max-width: ${breakpoints.md}px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
  }
  @media only screen and (min-width: ${breakpoints.md}px) {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
  }
`
