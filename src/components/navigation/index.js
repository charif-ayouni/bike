import React from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Wrapper, Button, ButtonHome } from './navigation.style'
import { FaStream, FaUndoAlt, FaUser, FaBiking } from 'react-icons/fa'
import { IoIosSunny, IoIosPartlySunny } from 'react-icons/io'
import { toggleTheme } from '../../redux/actions/themeAction'
import { setCurrentDisplayType } from '../../redux/actions/bikeActions'

const Navigation = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const { currentTheme } = useSelector(state => state.themeReducers)

  const toggle = () => {
    dispatch(toggleTheme())
  }
  const goHome = () => {
    dispatch(setCurrentDisplayType('bikes'))
    history.push('/')
  }

  if (location && !['/login', '/register'].includes(location.pathname)) {
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
          <Button onClick={() => toggle()}>
            <ThemeIcon theme={currentTheme.name} />
          </Button>
        </Wrapper>
      </Container>
    )
  } else {
    return null
  }
}

export default Navigation

const ThemeIcon = props => {
  let { theme } = { ...props }
  switch (theme) {
    case 'light':
      return <IoIosSunny style={{ fontSize: '25px' }} />
    case 'dark':
      return <IoIosPartlySunny style={{ fontSize: '25px' }} />
    default:
      break
  }
}
