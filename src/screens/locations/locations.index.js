import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  overflow: hidden;
  padding: 0 20px;
  padding-bottom: 100px;
`
export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
`
export const NavLink = styled.a`
  background-color: transparent;
  border: none;
  margin-right: 26px;
  ${props =>
    props.current
      ? `border-bottom: 2px solid ${props.theme.primaryColors.greenDark};`
      : ''}
  font-size: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  padding: 4px;
`
