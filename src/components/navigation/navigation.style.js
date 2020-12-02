import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  background: ${props => props.theme.background};
  box-shadow: 0 -2px 5px rgb(185 185 185 / 73%);
  z-index: 0;
`
export const Wrapper = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 0;
`

export const Button = styled.button`
  color: ${props => props.theme.primaryColors.greenDark};
  border: none;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  a {
    color: ${props =>
      props.current
        ? props.theme.secondaryColors.greenLight
        : props.theme.primaryColors.greenDark};
  }
  &:focus {
    outline: none;
  }
  ${props =>
    props.current
      ? ` background: ${props.theme.secondaryColors.greenTransparent};
    border-radius: 100%;
    box-shadow: inset 0 0 0 0 transparent;
    padding: 0.5rem;`
      : 'background: transparent'};
`

export const ButtonHome = styled.button`
  color: ${props => props.theme.primaryColors.greenDark};
  border: none;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  svg {
    width: 45px !important;
    height: 45px;
  }
  a {
    color: ${props => props.theme.primaryColors.greenDark};
  }
  &:focus {
    outline: none;
  }
  background: ${props => props.theme.background};
  border-radius: 100%;
  box-shadow: 0 -4px 3px rgb(185 185 185 / 73%);
  padding: 0.8rem;
  margin-bottom: 40px;
`
