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
  font-size: 40px;
  margin: 0;
`
export const Price = styled.h2`
  font-size: 25px;
  line-height: 24px;
  font-weight: 700;
`
export const Ul = styled.ul`
  margin: 20px 0;
  ${props => (props.border ? 'border-bottom: 1px solid #eaeaea;' : '')}
`
export const Li = styled.li`
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
export const StyledItem = styled.div`
  width: 45%;
`
export const StyledButton = styled.button`
  margin-bottom: 12px;
  border-radius: 3px;
  color: #565a5c;
  background-color: #fff;
  border: 1px solid #dedede;
  width: 100%;
  height: 50px;
  text-align: left;
  .svg-inline--fa {
    color: ${props => props.theme.primaryColors.greenLight};
    margin-right: 15px;
    font-size: 20px;
  }
  span {
    font-size: 15px;
  }
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
export const StyledNiceDates = styled.div`
  width: 50%;
  margin-bottom: 12px;
  border: 1px solid #dedede;
  border-radius: 11px;
  padding: 5px;
}
  .nice-dates-day:before {
    background-color: ${props => props.theme.primaryColors.greenLight};
  }
  .nice-dates-day:after {
    border: 2px solid ${props => props.theme.primaryColors.greenDark};
  }
  .nice-dates-day.-today {
    color:${props => props.theme.primaryColors.greenDark};
  }
`
export const StyledTotalContainer = styled.div`
  border: 1px solid #d9d9d9;
  border-left: 0;
  border-right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 12px;
`
export const StyledLabelTotal = styled.div`
  width: 65%;
  border-right: 1px solid #d9d9d9;
  height: 40px;
`
export const StyledTitle = styled.h3`
  margin-top: 0;
  text-align: center;
`
export const StyledPrice = styled.h4`
  padding: 10px 0p;
`
export const H1 = styled.h1`
  color: ${props => props.theme.primaryColors.greenLight};
  font-family: Roboto Slab;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 20px;
  text-transform: capitalize;
`
export const StyledCondition = styled.p`
  color: #363636;
  font-size: 13px;
  font-style: italic;
  font-weight: normal;
`

export const Styledflex = styled.div`
  display: block;
  overflow: hidden;
  height: 40;
`
export const StyledTable = styled.table`
  background: #fff none repeat scroll 0 0;
  border-bottom: 1px solid #f2f2f2;
  caption-side: top;
  position: absolute;
  left: centrer;
  width: 100%;
  .tr {
    border-top: 1px solid #f2f2f2;
  }
  .td:first-child {
    border-right: 1px solid #f2f2f2;
    text-align: center;
    color: #333;
    font-weight: 700;
    width: 30%;
  }
  .td {
    padding: 10px 20px 11px;
  }
`
export const StyledTbody = styled.tbody`
  border-top: 1px solid #f2f2f2;
`
export const StyledQuantity = styled.span`
  background: #333 none repeat scroll 0 0;
  border-radius: 4px;
  color: #fff;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  margin-left: 5px;
  padding: 8px 18px;
`
