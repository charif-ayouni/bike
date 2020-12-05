import React from 'react'
import { useSelector } from 'react-redux'
import Bikes from '../../components/bikes'
import Bike from '../../components/bike'

const Home = () => {
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
    content = <p>Erreur de connexion</p>
  }

  return <React.Fragment>{content}</React.Fragment>
}

export default Home
