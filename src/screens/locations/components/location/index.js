import React from 'react'
import {
  Location as Box,
  Title,
  Row,
  Picture,
  Button,
  Column
} from './location.style'
import { BsChevronCompactRight } from 'react-icons/bs'
import Status from '../../../../components/status'

const Location = props => {
  let { location } = { ...props }
  return (
    <Box>
      <Row border={true}>
        <Picture src={location.image} />
        <Column direction='column' alignItems='flex-start'>
          <Title>{location.title}</Title>
          <Status status={location.status} />
          <p>Commande N° {location.locationNumber}</p>
          <span>Effectuée le {location.date}</span>
          <p>Total: {location.price} €</p>
        </Column>
        <Column width={10} alignItems='center'>
          <Button>
            <BsChevronCompactRight />
          </Button>
        </Column>
      </Row>
    </Box>
  )
}

export default Location
