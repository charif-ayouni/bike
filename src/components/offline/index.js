import React, { useState, useEffect } from 'react'
import { Container } from './offline.style'
import { BiWifiOff } from 'react-icons/bi'

const Offline = () => {
  const [isConnected, setIsConnected] = useState(navigator.onLine)
  useEffect(() => {
    const handleNetworkChange = () => {
      if (navigator.onLine) {
        setIsConnected(true)
      } else {
        setIsConnected(false)
      }
    }
    window.addEventListener('online', handleNetworkChange)
    window.addEventListener('offline', handleNetworkChange)
  }, [navigator.onLine])

  return (
    <>
      {isConnected ? null : (
        <Container>
          <BiWifiOff style={{ color: 'red', fontSize: '35px' }} />
        </Container>
      )}
    </>
  )
}

export default Offline
