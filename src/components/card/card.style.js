import styled from 'styled-components'
const { innerWidth: width } = window

export const Card = styled.div`
  ${width < 540 ? `width: 100%` : `width: calc( 100% / 3 - 40px)`};
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
  background-color: ${props => props.theme.background};
  background-clip: border-box;
  border: ${props => props.theme.border};
  border-radius: 0.25rem;
  margin: 20px;
`
export const Header = styled.img`
  height: 180px;
  width: 100%;
  display: block;
  width: 100%;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  vertical-align: middle;
  border-style: none;
`
export const CardBody = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
`
export const Title = styled.h5`
  color: ${props => props.theme.fontColor};
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
`
