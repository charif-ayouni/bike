import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentDisplayType } from '../../redux/actions/bikeActions'
import { CardBody, Header, Title, Card as Container } from './card.style'
import Rate from '../rate'
import City from './components/city'

const Card = props => {
  const dispatch = useDispatch()
  let { item } = { ...props }
  const showBike = () => {
    dispatch(setCurrentDisplayType('bike', item))
  }
  return (
    <Container onClick={() => showBike()}>
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
