import React from 'react'
import { Label } from './review.style'

const Review = props => {
  let { review } = { ...props }
  return <Label>{review} review</Label>
}
export default Review
