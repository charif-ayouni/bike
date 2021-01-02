import styled from 'styled-components'
import breakpoints from '../../theme/breakpoints'

export const ToggleContainer = styled.button`
  position: relative;
  border: none;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
  overflow: hidden;
  cursor: pointer;
  width: calc(100vw / 5);
  height: 56px;
  @media (min-width: ${breakpoints.md}px) {
    justify-content: space-between;
    width: 8rem;
    height: 3.5rem;
    border-radius: 30px;
    border: 1px solid #c9c9c9;
    padding: 0.5rem;
    background: ${({ lightTheme }) =>
      lightTheme
        ? 'linear-gradient(#39598A, #79D7ED)'
        : 'linear-gradient(#091236, #1E215D)'};
  }
  &:focus {
    outline: none;
  }
  svg {
    position: absolute;
    width: 40px;
    left: calc(25% + 10px);
    @media (min-width: ${breakpoints.md}px) {
      font-size: 35px;
    }
    transition: all 0.3s linear;
    color: ${({ lightTheme }) => (lightTheme ? '#2c570a' : '#8bc345')};
    @media (min-width: ${breakpoints.md}px) {
      color: ${({ lightTheme }) => (lightTheme ? '#ffd073' : '#8bc345')};
      &:first-child {
        transform: ${({ lightTheme }) =>
          lightTheme ? 'translateY(0)' : 'translateY(100px)'};
      }

      &:nth-child(2) {
        transform: ${({ lightTheme }) =>
          lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
      }
    }
    @media (max-width: ${breakpoints.md}px) {
      &:first-child {
        opacity: ${({ lightTheme }) => (lightTheme ? '1' : '0')};
        transition: opacity 0.15s ease-in-out;
      }

      &:nth-child(2) {
        opacity: ${({ lightTheme }) => (lightTheme ? '0' : '1')};
        transition: opacity 0.15s ease-in-out;
      }
    }
  }
`
