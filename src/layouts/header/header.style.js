import styled from 'styled-components'
import breakpoints from '../../theme/breakpoints'

export const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 30;
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 5px rgb(185 185 185 / 73%);
  @media (min-width: ${breakpoints.md}px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (max-width: ${breakpoints.md}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
export const Row = styled.div`
  width: 100%;
  max-width: 945px;
  display: flex;
  justify-content: space-between;
`
export const HeaderTop = styled.div`
  max-width: 945px;
  display: flex;
  justify-content: center;
  height: 40px;
`
export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  margin: 5px 0;
  ${props => (props.ml ? `margin-left: ${props.ml}px;` : '')}
`
export const Li = styled.li`
  display: inline-block;
  margin: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    color: #868686;
    font-size: 25px;

    &:hover {
      color: ${props => props.theme.primaryColors.greenDark};
    }
  }
`
export const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 945px;
  height: 50px;
`
