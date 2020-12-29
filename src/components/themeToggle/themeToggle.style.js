import styled from 'styled-components'

export const ToggleContainer = styled.button`
  border: none;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
  overflow: hidden;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  svg {
    font-size: 25px;
    transition: all 0.3s linear;
    color: ${({ lightTheme }) => (lightTheme ? '#2c570a' : '#8bc345')};
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`
