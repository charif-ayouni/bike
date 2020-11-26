import React from 'react'
import { Label } from './city.style'

const City = props => {
  let { city } = { ...props }
  return <Label>{city}</Label>
}
export default City
