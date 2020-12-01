import React from 'react'
import { Container, Background, Text, Inner } from './home.style'
import SearchForm from '../../components/search'

const Home = () => {
  return (
    <Container>
      <Background />
      <Inner>
        <Text>Réserver votre Vélo dès maintenant</Text>
        <SearchForm />
      </Inner>
    </Container>
  )
}

export default Home
