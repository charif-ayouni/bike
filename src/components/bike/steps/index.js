import React, { useState, useEffect } from 'react'
import Status from '../../status'
import Rate from '../../rate'
import { useTranslation } from 'react-i18next'
import {
  Title,
  Ul,
  Li,
  LiValue,
  Price,
  DateRange,
  DateInput
} from './steps.style'
import { useSelector } from 'react-redux'
import { enUS, frCA } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import { FaChevronRight } from 'react-icons/fa'

import 'react-nice-dates/build/style.css'
import Stripe from '../../stripe'

import { useDispatch } from 'react-redux'
import { addOrder } from '../../../redux/actions/orderActions'

// eslint-disable-next-line react/prop-types
const Steps = ({ step }) => {
  return (
    <>
      {step >= 1 ? <InformationStep /> : null}
      {step >= 2 ? <DatesStep /> : null}
      {step >= 3 ? <Stripe /> : null}
    </>
  )
}

export default Steps

const InformationStep = () => {
  const { t } = useTranslation()
  const { bike } = useSelector(state => state.bikeReducers)

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

const DatesStep = () => {
  const { currentLanguage } = useSelector(state => state.languageReducer)
  const { t } = useTranslation()
  let local = currentLanguage.icon === 'Fr' ? frCA : enUS
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    if (startDate && endDate) {
      dispatch(
        addOrder({
          date: {
            from: startDate.toLocaleDateString(),
            to: endDate.toLocaleDateString()
          }
        })
      )
    }
  }, [startDate, endDate])
  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      minimumLength={1}
      format='dd MMM yyyy'
      locale={local}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <>
          <Title size={24} m={14}>
            {t('selectDate')}
          </Title>
          <DateRange>
            <DateInput
              className={'input' + (focus === START_DATE ? ' -focused' : '')}
              {...startDateInputProps}
              placeholder={t('startDate')}
            />
            <FaChevronRight
              style={{
                flexShrink: 0,
                position: 'relative',
                width: '36px',
                color: '#d3dde6',
                fontSize: '26px'
              }}
            />
            <DateInput
              className={'input' + (focus === END_DATE ? ' -focused' : '')}
              {...endDateInputProps}
              placeholder={t('endDate')}
            />
          </DateRange>
        </>
      )}
    </DateRangePicker>
  )
}
