import styled from 'styled-components'
import breakpoints from '../../theme/breakpoints'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  overflow: hidden;
  padding: 0 20px;
  padding-bottom: 100px;
`
export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:after {
    width: 100%;
    height: 1px;
    content: ' ';
    display: block;
    margin-top: 1.3em;
    background: #e9eff6;
  }
  .title {
    color: #7c8097;
    font-size: 0.75em;
    font-weight: 300;
    text-align: center;
    padding-top: 0.5em;
    padding-bottom: 0.7em;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  .description {
    color: #080911;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 1.3em;
  }
`
export const Check = styled.div`
  position: absolute;
  right: 0.5em;
  bottom: 0.5em;
  svg {
    color: #fff;
    width: 20px;
    height: 20px;
    padding: 4px;
    line-height: 20px;
    text-align: center;
    border-radius: 100%;
    background: linear-gradient(to bottom right, #3b74bd, #029f27db);
  }
`
export const Thumbnail = styled.div`
  position: relative;
  width: 124px;
  height: 124px;
  margin: 0 auto;
  img {
    width: 124px;
    height: 124px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5em;
    border-radius: 100%;
    box-shadow: 0 13px 26px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.2);
  }
  /*svg {
    width: 124px;
    height: 124px;
    padding: 5px;
    color: #bfbebe;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5em;
    border-radius: 100%;
    box-shadow: 0 13px 26px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.2);
  }*/
`
export const Name = styled.h3`
  color: #2d354a;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0px;
  svg {
    width: 17px;
    height: 17px;
    padding-top: 5px;
    margin-left: 15px;
  }
  a:hover {
    cursor: pointer;
    svg {
      width: 19px;
      height: 19px;
    }
  }
`
export const Group = styled.div`
  @media only screen and (max-width: ${breakpoints.sm}px) {
    width: 100%;
  }
  @media only screen and (min-width: ${breakpoints.sm}px) {
    width: 40%;
  }
  ${props => (props.mt ? `margin-top: ${props.mt}px` : '')}
`
export const GroupButton = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    width: 100%;
  }
  @media only screen and (min-width: ${breakpoints.sm}px) {
    width: 40%;
  }
  ${props => (props.mt ? `margin-top: ${props.mt}px` : '')}
`
export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #3b74bd;
  outline: none;
  background-color: transparent;
  color: inherit;
  &:focus {
    border-bottom: 1px solid #ff652f;
  }
`
export const Button = styled.button`
  ${props =>
    props.type === 'submit'
      ? `background: #3b74bd;color: #fff;`
      : 'color: #000;'}
  border: none;s
  outline: none;
  font-size: 1rem;
  letter-spacing: 1px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`
export const Error = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
`
