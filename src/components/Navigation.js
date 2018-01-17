import React from 'react'
import glamorous from 'glamorous'
import _variables from '../styles/_variables'

const UploadButton = glamorous.button({
  backgroundColor: '#494949',
  border: 0,
  color: _variables.lightGrey,
  padding: 0,
  fontSize: _variables.fontSize,
  width: '100%',
  textAlign: 'left',
  display: 'block',
  lineHeight: '26px',
  borderRadius: 8,
  cursor: 'pointer',
  paddingLeft: 8,
  '&:focus': { outline: 'none' },
  '&:hover': { color: _variables.white }
})

const Navigation = props => (
  <ul>
    <li>
      <UploadButton>Home</UploadButton>
    </li>
  </ul>
)

export default Navigation
