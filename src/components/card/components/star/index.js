import React from 'react'
import { Container, Space } from './star.style'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Star = props => {
  let { icon } = { ...props }
  return (
    <Space>
      <Container>
        <Icon icon={icon} />
      </Container>
    </Space>
  )
}
export default Star

const Icon = props => {
  let { icon } = { ...props }
  switch (icon) {
    case 'BsStar':
      return <BsStar />
    case 'BsStarHalf':
      return <BsStarHalf />
    default:
      return <BsStarFill />
  }
}
