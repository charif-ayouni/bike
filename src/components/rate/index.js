import React from 'react'
import { Container } from './rate.style'
import Star from '../star'
import Review from '../review'

const Rate = props => {
  let { rate } = { ...props }
  return (
    <Container>
      <Star />
      <Star />
      <Star icon='BsStarHalf' />
      <Star icon='BsStar' />
      <Review review={rate} />
    </Container>
  )
}
export default Rate
