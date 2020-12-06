import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  Diviser,
  Back
} from './bike.style'
import Carousel from '../../components/carousel'
import Rate from '../../components/rate'
import Status from '../../components/status'
import Specification from '../../components/specification'
import { IoReturnUpBackOutline } from 'react-icons/io5'
import { setCurrentDisplayType } from '../../redux/actions/bikeActions'
import { useTranslation } from 'react-i18next'

const Single = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { bike } = useSelector(state => state.bikeReducers)
  const goBack = () => {
    dispatch(setCurrentDisplayType('bikes'))
  }
  return (
    <Container>
      <Back onClick={() => goBack()}>
        <IoReturnUpBackOutline style={{ fontSize: '18px' }} />
      </Back>
      <Row border={true}>
        <LeftBox>
          <Carousel pictures={bike.pictures} />
        </LeftBox>
        <RightBox>
          <Title>{bike.title}</Title>
          <Status status={bike.status} />
          <Rate rate={bike.rate} />
          <Ul border={true}>
            <Li>
              {t('condition')}: <LiValue>New Bike</LiValue>
            </Li>
            <Li>
              {t('color')}: <LiValue>Blanc Glacier/Lin</LiValue>
            </Li>
          </Ul>
          <Price>
            {bike.price} {t('perDay')}
          </Price>
          <Button>{t('reserve')}</Button>
        </RightBox>
      </Row>
      <Diviser />
      <Row direction='column'>
        <Title>{t('specifications')}</Title>
        <Ul>
          <Specification />
        </Ul>
      </Row>
      <Diviser size={100} />
    </Container>
  )
}

export default Single
