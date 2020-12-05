import styled from 'styled-components'

export const Label = styled.div`
  color: ${props => props.theme.fontColor};
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
