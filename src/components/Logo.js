import React from 'react'
import glamorous from 'glamorous'
import _variables from '../styles/_variables'

const StyledLogo = glamorous.div({
  color: _variables.ziggurat,
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: 200,
  position: 'relative',
  textTransform: 'uppercase',
  '&::after': {
    background:
      'url(https://cdn.dribbble.com/users/87003/screenshots/926295/dri1.jpg)',
    backgroundPosition: 'center',
    backgroundSize: '231%',
    borderRadius: '50%',
    content: ' ',
    height: 136,
    left: 12,
    top: 32,
    width: 136,
    position: 'absolute'
  }
})

const Logo = () => <StyledLogo>kittengram</StyledLogo>

export default Logo
