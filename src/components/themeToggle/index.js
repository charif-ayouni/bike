import React from 'react'
import { ToggleContainer } from './themeToggle.style'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../redux/actions/themeAction'
import { ReactComponent as MoonIcon } from './icons/moon.svg'
import { ReactComponent as SunIcon } from './icons/sun.svg'

const ThemeToggle = () => {
  const dispatch = useDispatch()
  const { currentTheme } = useSelector(state => state.themeReducers)
  const toggle = () => {
    dispatch(toggleTheme())
  }

  const isLight = currentTheme.name === 'light'

  return (
    <ToggleContainer lightTheme={isLight} onClick={() => toggle()}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  )
}

export default ThemeToggle
