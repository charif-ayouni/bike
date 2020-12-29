import React from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container, Wrapper, Button, ButtonHome } from './navigation.style'
import { FaStream, FaUndoAlt, FaUser, FaBiking } from 'react-icons/fa'
import { setCurrentDisplayType } from '../../redux/actions/bikeActions'
import ThemeToggle from '../../components/themeToggle'

const Navigation = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const goHome = () => {
    dispatch(setCurrentDisplayType('bikes'))
    history.push('/')
  }

  if (
    location &&
    !['/login', '/register', '/forgot-password'].includes(location.pathname)
  ) {
    return (
      <Container>
        <Wrapper>
          <Button current={location.pathname === '/locations'}>
            <Link to='/locations'>
              <FaStream style={{ fontSize: '25px' }} />
            </Link>
          </Button>
          <Button current={location.pathname === '/return'}>
            <Link to='/return'>
              <FaUndoAlt style={{ fontSize: '25px' }} />
            </Link>
          </Button>
          <ButtonHome
            current={location.pathname === '/'}
            onClick={() => goHome()}
          >
            <FaBiking style={{ fontSize: '25px' }} />
          </ButtonHome>
          <Button current={location.pathname === '/profile'}>
            <Link to='/profile'>
              <FaUser style={{ fontSize: '25px' }} />
            </Link>
          </Button>
          <ThemeToggle />
        </Wrapper>
      </Container>
    )
  } else {
    return null
  }
}

export default Navigation
