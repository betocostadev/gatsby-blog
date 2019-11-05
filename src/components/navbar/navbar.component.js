import React from 'react'
import { Nav } from './navbar.styles'

const Navbar = () => {
  return (
    <Nav>
      <a href='./me'>Me</a>
      <a href='./blog'>Articles</a>
      <a href='./'>Contact</a>
    </Nav>
  )
}

export default Navbar