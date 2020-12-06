import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Background, Text, Inner } from './home.style'
import SearchForm from '../../components/search'

const Home = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Background />
      <Inner>
        <Text>{t('reserveYourBike')}</Text>
        <SearchForm />
      </Inner>
    </Container>
  )
}

export default Home
