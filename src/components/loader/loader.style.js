import styled, { keyframes } from 'styled-components'

export const Root = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
`

const spinnerborder = keyframes`
  to { 
    transform: rotate(360deg); 
  }
`

export const SpinnerBorder = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border 0.75s linear infinite;
  animation: ${spinnerborder} 0.75s linear infinite;
  &:after {
    display: block;
    clear: both;
    content: '';
  }
`
export const LoadingText = styled.p`
  font-weight: 300;
  font-style: italic;
  letter-spacing: 1.2px;
`
