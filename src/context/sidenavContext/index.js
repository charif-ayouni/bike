import React, { useContext, useState, createContext } from 'react'
const SidenavContext = createContext()

const useSidenav = () => {
  return useContext(SidenavContext)
}
// eslint-disable-next-line react/prop-types
const SidenavProvider = ({ children }) => {
  const [open, setOpen] = useState(false)

  const toggleSidenav = () => {
    setOpen(!open)
  }

  const value = { open, toggleSidenav }

  return (
    <SidenavContext.Provider value={value}>{children}</SidenavContext.Provider>
  )
}
export { SidenavProvider, useSidenav }
