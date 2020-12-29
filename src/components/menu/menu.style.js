import styled from 'styled-components'
import breakpoints from '../../theme/breakpoints'

export const Span = styled.span`
  @media (max-width: ${breakpoints.md}px) {
    display: none !important;
  }
  position: fixed;
  left: 30px;
  font-size: 25px;
  top: 15px;
  color: #868686;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    color: #264a77;
  }
`
