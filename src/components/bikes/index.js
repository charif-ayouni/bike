import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IoReturnUpBackOutline } from 'react-icons/io5'
import Card from '../card'
import Map from '../../components/map'
import Loader from './loader'
import { Container, Wrapper, Button } from './bikes.style'

const Bikes = () => {
  const history = useHistory()
  const { bikes } = useSelector(state => state.bikeReducers)
  const goBack = () => {
    history.goBack()
  }
  let [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      console.log(window.pageYOffset)
      if (window.pageYOffset !== undefined) {
        if (window.pageYOffset <= 65) {
          setOffset(window.pageYOffset)
        } else {
          setOffset(65)
        }
      }
    }
  }, [offset])

  return (
    <Container>
      <Button onClick={() => goBack()}>
        <IoReturnUpBackOutline style={{ fontSize: '18px' }} />
      </Button>
      {bikes ? (
        <React.Fragment>
          <Wrapper>
            {bikes.map((item, key) => (
              <Card key={key} item={item} bike={item} />
            ))}
          </Wrapper>
          <Map offset={offset} bikes={bikes} />
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </Container>
  )
}

export default Bikes
