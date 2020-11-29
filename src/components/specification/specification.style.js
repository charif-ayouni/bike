import styled from 'styled-components'
import breakpoints from '../../theme/breakpoints'

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${props => (props.border ? 'border-bottom: 1px solid #eaeaea;' : '')}
  margin-top: 20px;
`
export const Column = styled.div`
  font-weight: 700;
  line-height: 24px;
  font-size: 22px;
  margin-bottom: 15px;
  @media only screen and (max-width: ${breakpoints.md}px) {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media only screen and (min-width: ${breakpoints.md}px) {
    -ms-flex: 0 0 33.33%;
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
`
export const Item = styled.li`
  span {
    display: block;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 15px;
  }
`
