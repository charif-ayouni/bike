import styled from 'styled-components'

export const Ul = styled.ul`
  margin: 20px 0;
  ${props => (props.border ? 'border-bottom: 1px solid #eaeaea;' : '')}
`
export const Li = styled.li`
  color: ${props => props.theme.fontColor};
  display: block;
  margin: 5px 0;
  &:last-child {
    padding-bottom: 15px;
  }
`
export const LiValue = styled.span`
  color: ${props => props.theme.primaryColors.greenDark};
`
export const Price = styled.h2`
  color: ${props => props.theme.fontColor};
  font-size: 25px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 30px;
`
export const Title = styled.h2`
  color: ${props => props.theme.fontColor};
  font-size: ${props => (props.size ? props.size : 40)}px;
  margin: ${props => (props.m ? props.m : 0)}px 0px;
`
export const DateRange = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  input {
    width: 100%;
  }
`
export const DateInput = styled.input`
  -webkit-appearance: none;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #d3dde6;
  color: #0e3254;
  display: block;
  font-family: inherit;
  font-size: inherit;
  height: 42px;
  outline: none;
  padding: 0 12px;
  transition: border-color 0.2s;
`
