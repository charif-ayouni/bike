import React from 'react'
import { IconContainer, Container } from './map.style.js'
import GoogleMapReact from 'google-map-react'
import { MdDirectionsBike } from 'react-icons/md'

const Map = props => {
  let { offset, bikes } = { ...props }

  return (
    <Container offset={offset}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCJZZWgsWsP3PYCpA_uV6HfuKtPrC6xvkE' }}
        defaultCenter={{
          lat: bikes[0].position.lat,
          lng: bikes[0].position.lng
        }}
        defaultZoom={15}
        hoverDistance={15 / 2}
      >
        {bikes.map((bike, index) => {
          return (
            <Marker
              lat={bike.position.lat}
              lng={bike.position.lng}
              text={bike.title}
              key={index}
            />
          )
        })}
      </GoogleMapReact>
    </Container>
  )
}

export default Map

const Marker = () => {
  return (
    <IconContainer>
      <MdDirectionsBike style={{ fontSize: '20px', color: '#FFFFFF' }} />
    </IconContainer>
  )
}
