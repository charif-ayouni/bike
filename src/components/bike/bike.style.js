import styled from 'styled-components'
import breakpoints from '../../theme/breakpoints'

export const Container = styled.div`
  max-width: 1200px;
  margin-top: 20px;
  overflow: hidden;
  padding: 0 20px;
`
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${props => (props.border ? 'border-bottom: 1px solid #eaeaea;' : '')}
  ${props => (props.direction ? `flex-direction: ${props.direction}` : '')}
`
export const LeftBox = styled.div`
  @media only screen and (max-width: ${breakpoints.md}px) {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media only screen and (min-width: ${breakpoints.md}px) {
    -ms-flex: 0 0 55%;
    flex: 0 0 55%;
    max-width: 55%;
    padding-right: 20px;
  }
`
export const RightBox = styled.div`
  @media only screen and (max-width: ${breakpoints.md}px) {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media only screen and (min-width: ${breakpoints.md}px) {
    -ms-flex: 0 0 45%;
    flex: 0 0 45%;
    max-width: 45%;
  }
`

export const Title = styled.h2`
  color: ${props => props.theme.fontColor};
  font-size: 40px;
  margin: 0;
`
export const Price = styled.h2`
  color: ${props => props.theme.fontColor};
  font-size: 25px;
  line-height: 24px;
  font-weight: 700;
`
export const Ul = styled.ul`
  margin: 20px 0;
  ${props => (props.border ? 'border-bottom: 1px solid #eaeaea;' : '')}
`
export const Li = styled.li`
  color: ${props => props.theme.fontColor};
  display: block;
  margin: 5px 0;
  &:last-child {
    padding-bottom: 15px;
  }
`
export const LiValue = styled.span`
  color: ${props => props.theme.primaryColors.greenDark};
`
export const Diviser = styled.div`
  margin-top: ${props => (props.size ? props.size : '40')}px;
`
export const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: ${props => props.theme.primaryColors.greenDark};
  border: none;
  border-radius: 0px;
  outline: 0;
  padding: 5px 3rem;
  cursor: pointer;
  margin-top: 30px;
`
export const Back = styled.button`
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
