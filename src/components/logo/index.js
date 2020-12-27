import React from 'react'
import { Img } from './logo.style'
import Image from '../../assets/images/logo.png'
import { Link } from '../../screens/forgotPassword/forgotPassword.index'

const Logo = () => {
  return (
    <Link to='/'>
      <Img src={Image} alt='bike day' />
    </Link>
  )
}

export default Logo
