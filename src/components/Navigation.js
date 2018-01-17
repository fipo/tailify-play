import React from 'react'
import glamorous from 'glamorous'
import _variables from '../styles/_variables'
import { NavLink } from 'react-router-dom'

const NavButton = glamorous(NavLink)({
  border: 0,
  borderRadius: 8,
  color: _variables.lightGrey,
  cursor: 'pointer',
  display: 'block',
  fontSize: _variables.fontSize,
  lineHeight: '26px',
  padding: 0,
  paddingLeft: 8,
  textAlign: 'left',
  textDecoration: 'none',
  width: '100%',
  '&:focus': { outline: 'none' },
  '&:hover': { color: _variables.white },
  '.active': { backgroundColor: '#494949' }
})

const Navigation = props => (
  <ul>
    <li>
      <NavButton to="/">Home</NavButton>
      <NavButton to="/report">Campaign Report</NavButton>
    </li>
  </ul>
)

export default Navigation
