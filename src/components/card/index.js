import React from 'react'
import { CardBody, Header, Title, Card as Container } from './card.style'
import Rate from './components/rate'
import City from './components/city'

const Card = props => {
  let { item } = { ...props }
  return (
    <Container>
      <Header src={item.image} />
      <CardBody>
        <Title>{item.title}</Title>
        <Rate rate={item.rate} />
        <City city={item.city} />
      </CardBody>
    </Container>
  )
}
export default Card
