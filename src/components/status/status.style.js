import styled from 'styled-components'

export const Label = styled.p`
  display: inline-flex;
  align-items: flex-end;
  font-size: 22px;
  color: ${props => (props.available ? '#2c570a' : '#db0000')};
  margin: 10px 0px;
  text-transform: capitalize;
`
