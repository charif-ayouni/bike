import React from 'react'
import { Container } from './rate.style'
import Star from '../../components/star'
import Review from '../../components/review'

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
