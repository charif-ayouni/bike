import React from 'react'
import 'react-nice-dates/build/style.css'
import {
  Container,
  Row,
  LeftBox,
  RightBox,
  Title,
  Ul,
  Li,
  LiValue,
  Price,
  Button,
  Diviser
} from './single.style'
import Carousel from '../../components/carousel'
import Rate from '../../components/rate'
import Status from '../../components/status'
import Specification from '../../components/specification'

const Single = () => {
  return (
    <Container>
      <Row border={true}>
        <LeftBox>
          <Carousel />
        </LeftBox>
        <RightBox>
          <Title>E-BIKE EXTREME EDITION</Title>
          <Status status={'available'} />
          <Rate rate='1.33' />
          <Ul border={true}>
            <Li>
              Condition: <LiValue>New Bike</LiValue>
            </Li>
            <Li>
              Couleur: <LiValue>Blanc Glacier/Lin</LiValue>
            </Li>
          </Ul>
          <Price>27€ par jour</Price>
          <Button>Reserver</Button>
        </RightBox>
      </Row>
      <Diviser />
      <Row direction='column'>
        <Title>Spécifications</Title>
        <Ul>
          <Specification />
        </Ul>
      </Row>
      <Diviser size={100} />
    </Container>
  )
}

export default Single
