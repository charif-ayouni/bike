import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'react-nice-dates/build/style.css'
import {
  Container,
  Row,
  LeftBox,
  RightBox,
  Title,
  Ul,
  Buttons,
  Button,
  ButtonReturn,
  Diviser,
  Back
} from './bike.style'
import Carousel from '../../components/carousel'
import Specification from '../../components/specification'
import { IoReturnUpBackOutline } from 'react-icons/io5'
import { setCurrentDisplayType } from '../../redux/actions/bikeActions'
import { useTranslation } from 'react-i18next'
import Steps from './steps'

const Single = () => {
  const [step, setStep] = useState(1)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { bike } = useSelector(state => state.bikeReducers)
  const goBack = () => {
    dispatch(setCurrentDisplayType('bikes'))
  }
  const nextStep = e => {
    e.preventDefault()
    if (step <= 2) {
      setStep(step + 1)
    }
  }
  const previousStep = e => {
    e.preventDefault()
    if (step >= 2) {
      setStep(step - 1)
    }
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
          <Steps step={step} />
          {step === 1 ? (
            <Button onClick={e => nextStep(e)}>{t('reserve')}</Button>
          ) : null}
          {step > 1 ? (
            <Buttons>
              {step !== 3 ? (
                <>
                  <Button onClick={e => nextStep(e)}>{t('next')}</Button>
                  <ButtonReturn type='button' onClick={e => previousStep(e)}>
                    {t('return')}
                  </ButtonReturn>
                </>
              ) : null}
            </Buttons>
          ) : null}
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
