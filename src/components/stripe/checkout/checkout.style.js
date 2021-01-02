import styled from 'styled-components'
import breakpoints from '../../../theme/breakpoints'

export const Input = styled.input`
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
export const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: ${props => props.theme.primaryColors.greenDark};
  border: none;
  border-radius: 0px;
  outline: 0;
  padding: 5px 3rem;
  cursor: pointer;
  margin-top: 30px;
`
export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    color: ${props => props.theme.fontColor};
  }

  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
    label {
      width: 25%;
    }
    label:first-child {
      width: 50% !important;
    }
  }
  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column;
    label {
      width: 100% !important;
      margin-bottom: 10px;
    }
  }
`
export const Title = styled.h2`
  color: ${props => props.theme.fontColor};
  font-size: ${props => (props.size ? props.size : 40)}px;
  margin: ${props => (props.m ? props.m : 0)}px 0px;
`
export const Alert = styled.div`
  height: 20px;
  padding: 4px 0;
  color: #fa755a;
`
export const Success = styled.div`
  height: 20px;
  padding: 4px 0;
  color: #2c570a;
`
