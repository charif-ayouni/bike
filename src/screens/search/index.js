import React from 'react'
import { useSelector } from 'react-redux'
import Bikes from '../../components/bikes'
import Bike from '../../components/bike'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  let content
  const { displayType } = useSelector(state => state.bikeReducers)

  if (displayType === 'bikes') {
    content = (
      <React.Fragment>
        <Bikes />
      </React.Fragment>
    )
  } else if (displayType === 'bike') {
    content = (
      <React.Fragment>
        <Bike />
      </React.Fragment>
    )
  } else {
    content = <p>{t('connexionError')}</p>
  }

  return <React.Fragment>{content}</React.Fragment>
}

export default Home
