import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 320px;
  height: 540px;
  background: #fdfeff;
  transition: background 0.6s ease;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  box-shadow: 0 8px 40px rgba(#000000, 0.2);
`
export const Picture = styled.div`
  margin-top: 2.2em;
  position: relative;
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
  right: 5em;
  bottom: 13.8em;
  svg {
    color: #fff;
    width: 20px;
    height: 20px;
    padding: 4px;
    line-height: 20px;
    text-align: center;
    border-radius: 100%;
    background: linear-gradient(to bottom right, #c90a6d, #ff48a0);
  }
`
export const Thumbnail = styled.div`
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
  svg {
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
  }
`
export const Name = styled.h3`
  color: #2d354a;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  svg {
    width: 24px;
    height: 24px;
    padding-top: 5px;
    margin-left: 5px;
  }
`
