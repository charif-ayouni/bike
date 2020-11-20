import React from 'react'
import { Root, SpinnerBorder, LoadingText } from './loader.style'

const Loader = () => {
  return (
    <Root>
      <SpinnerBorder />
      <LoadingText>Loading</LoadingText>
    </Root>
  )
}

export default Loader
