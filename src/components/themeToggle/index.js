import React from 'react'
import { ToggleContainer } from './themeToggle.style'
import { useDispatch, useSelector } from 'react-redux'
import { FaSun, FaMoon } from 'react-icons/fa'
import { toggleTheme } from '../../redux/actions/themeAction'

const themeToggle = () => {
  const dispatch = useDispatch()
  const { currentTheme } = useSelector(state => state.themeReducers)
  const toggle = () => {
    dispatch(toggleTheme())
  }

  const isLight = currentTheme.name === 'light'

  return (
    <ToggleContainer lightTheme={isLight} onClick={() => toggle()}>
      <FaSun />
      <FaMoon />
    </ToggleContainer>
  )
}

export default themeToggle
