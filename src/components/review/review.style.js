import styled from 'styled-components'

export const Label = styled.div`
  color: ${props => props.theme.fontColor};
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
