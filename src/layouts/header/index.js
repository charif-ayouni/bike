import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, HeaderTop, Row, Ul, Li } from './header.style'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Fr, En } from '../../components/tag'
import Menu from '../../components/menu'
import Logo from '../../components/logo'
import { toggleLanguage } from '../../redux/actions/languageAction'
import Offline from '../../components/offline'

const Header = () => {
  return (
    <Container>
      <Menu />
      <Row>
        <Logo />
        <Offline />
        <HeaderTop>
          <Ul>
            <UlChild key='facebook' link='/facebook' icon='FaFacebook' />
            <UlChild key='twitter' link='/twitter' icon='FaTwitter' />
            <UlChild key='instagram' link='/instagram' icon='FaInstagram' />
          </Ul>
          <Ul ml={20}>
            <Flag />
          </Ul>
        </HeaderTop>
      </Row>
    </Container>
  )
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

const Flag = () => {
  const dispatch = useDispatch()
  const { currentLanguage } = useSelector(state => state.languageReducer)

  const changeLanguage = () => {
    dispatch(toggleLanguage())
  }

  return (
    <Li onClick={() => changeLanguage()}>
      <Icon icon={currentLanguage.icon} />
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
