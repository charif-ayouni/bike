import React from 'react'
import { useSelector } from 'react-redux'
import Bikes from '../../components/bikes'
import Single from '../single'

const Home = () => {
  let content
  const { displayType, bike } = useSelector(state => state.bikeReducers)

  if (displayType === 'bikes') {
    content = (
      <React.Fragment>
        <Bikes />
      </React.Fragment>
    )
  } else if (bike !== null) {
    content = (
      <React.Fragment>
        <Single bike={bike} />
      </React.Fragment>
    )
  } else {
    content = <p>Erreur de connexion</p>
  }

  return <React.Fragment>{content}</React.Fragment>
}

export default Home
