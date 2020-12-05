import styled from 'styled-components'
import breakpoints from '../../theme/breakpoints'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  width: 100%;
  padding: 0;
  margin: 40px auto 70px auto;
  @media screen and (max-width: ${breakpoints.sm}px) {
    margin-top: 10px !important;
  }
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media only screen and (min-width: ${breakpoints.md}px) {
    height: 80px;
    flex-direction: row !important;
  }
`
export const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 1.2rem;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`
export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`
export const Box = styled.div`
  position: relative;
  height: 65px;
  background-color: #fff;
  align-items: flex-start;
  cursor: text;
  border-radius: 3px 0 0 3px;
  @media only screen and (min-width: ${breakpoints.md}px) {
    flex: 1;
    height: 80px;
  }
`
export const WhereBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px 60px;
  border-bottom: 1px solid #9a9a9a;
  @media only screen and (min-width: ${breakpoints.md}px) {
    -ms-flex-positive: 2;
    flex-grow: 2;
    border-bottom: none;
  }
`

export const Button = styled.button`
  position: relative;
  z-index: 1;
  min-width: 220px;
  height: 65px;
  background-color: #e14530;
  border: none;
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 0 3px 3px 0;
  outline: 0;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: 0 3px 3px 0;
    cursor: pointer;
    &:before {
      right: 0;
    }
  }
  &:before {
    content: '';
    position: absolute;
    background: #d9331d;
    bottom: 0;
    left: 0;
    right: 100%;
    top: 0;
    z-index: -1;
    transition: right 0.2s ease-in-out;
  }
  @media only screen and (min-width: ${breakpoints.md}px) {
    height: 80px;
  }
  @media only screen and (max-width: ${breakpoints.md}px) {
    margin-top: 20px;
  }
`
export const Icon = styled.div`
  position: absolute;
  z-index: 999;
  top: 20px;
  left: 10px;
`
