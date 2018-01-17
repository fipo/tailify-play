import React from 'react'
import glamorous, { ThemeProvider } from 'glamorous'
import _variables from '../styles/_variables'

const notice = { main: { backgroundColor: _variables.green } }
const alert = { main: { backgroundColor: _variables.red } }

const StyledNotification = glamorous.div(
  {
    padding: '3px 5px',
    position: 'absolute',
    width: 306,
    margin: '0 5px',
    borderRadius: 3,
    bottom: 5
  },
  ({ theme }) => ({
    backgroundColor: theme.main.backgroundColor
  })
)

const Notification = props => {
  const theme = props.theme === 'notice' ? notice : alert
  return (
    <ThemeProvider theme={theme}>
      <StyledNotification>{props.text}</StyledNotification>
    </ThemeProvider>
  )
}

export default Notification
