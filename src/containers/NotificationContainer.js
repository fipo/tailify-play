import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Notification from '../components/Notification'

class NotificationContainer extends Component {
  static propTypes = {
    status: PropTypes.number,
    uri: PropTypes.string
  }

  state = {
    message: '',
    uri: '',
    theme: ''
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 200) {
      this.setState({ message: 'Pastebin has been updated!', uri: nextProps.uri, theme: 'notice' })
    }

    if (nextProps.status === 403) {
      this.setState({ message: 'Pastebin Update Failed!', theme: 'alert' })
    }
  }

  render() {
    const { message } = this.state
    return <div>{message ? <Notification {...this.state} /> : ''}</div>
  }
}

export default NotificationContainer
