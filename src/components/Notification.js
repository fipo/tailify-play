import React from 'react'
import glamorous, { ThemeProvider } from 'glamorous'
import _variables from '../styles/_variables'

const notice = { main: { backgroundColor: _variables.green } }
const alert = { main: { backgroundColor: _variables.red } }

const StyledNotification = glamorous.div(
  {
    borderRadius: 3,
    bottom: 5,
    margin: '0 5px',
    padding: '3px 5px',
    position: 'absolute',
    width: 306
  },
  ({ theme }) => ({
    backgroundColor: theme.main.backgroundColor
  })
)

const Notification = props => (
  <ThemeProvider theme={props.theme === 'notice' ? notice : alert}>
    <StyledNotification>
      {props.message}
      <br />
      <a href={props.uri} target="_blank">
        {props.uri}
      </a>
    </StyledNotification>
  </ThemeProvider>
)

export default Notification
