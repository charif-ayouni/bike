import React from 'react'
import { IconContainer, Container } from './map.style.js'
import GoogleMapReact from 'google-map-react'
import { MdDirectionsBike } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Map = props => {
  let { offset, bikes } = { ...props }
  const { currentLanguage } = useSelector(state => state.languageReducer)

  return (
    <Container offset={offset}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyCJZZWgsWsP3PYCpA_uV6HfuKtPrC6xvkE',
          language: currentLanguage.locale.slice(0, 2)
        }}
        defaultCenter={{
          lat: bikes[0]?.position.lat,
          lng: bikes[0]?.position.lng
        }}
        defaultZoom={15}
        hoverDistance={15 / 2}
      >
        {bikes
          ? bikes.map((bike, index) => {
              return (
                <Marker
                  lat={bike.position.lat}
                  lng={bike.position.lng}
                  text={bike.title}
                  key={index}
                />
              )
            })
          : null}
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
