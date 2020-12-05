import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, HeaderTop, Row, Ul, Li } from './header.style'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Fr, En } from '../tag'
import Logo from '../../components/logo'

const Header = () => {
  const location = useLocation()
  if (location && !['/login', '/register'].includes(location.pathname)) {
    return (
      <Container>
        <Row>
          <Logo />
          <HeaderTop>
            <Ul>
              <UlChild key='facebook' link='/facebook' icon='FaFacebook' />
              <UlChild key='twitter' link='/twitter' icon='FaTwitter' />
              <UlChild key='instagram' link='/instagram' icon='FaInstagram' />
            </Ul>
            <Ul ml={20}>
              <Flag key='fr' lang='Fr' />
            </Ul>
          </HeaderTop>
        </Row>
      </Container>
    )
  } else {
    return null
  }
}

export default Header

const UlChild = props => {
  let { link, icon } = { ...props }
  return (
    <Li>
      <Link to={link}>
        <Icon icon={icon} />
      </Link>
    </Li>
  )
}

const Flag = props => {
  let { lang } = { ...props }
  return (
    <Li>
      <Icon icon={lang} />
    </Li>
  )
}

const Icon = props => {
  let { icon } = { ...props }
  switch (icon) {
    case 'FaFacebook':
      return <FaFacebook />
    case 'FaTwitter':
      return <FaTwitter />
    case 'FaInstagram':
      return <FaInstagram />
    case 'Fr':
      return <Fr />
    case 'En':
      return <En />
    default:
      return null
  }
}
