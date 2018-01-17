import React from 'react'
import glamorous from 'glamorous'
import _variables from '../styles/_variables'
import Notification from './Notification'

const PostWrapper = glamorous.div({
  backgroundColor: _variables.white,
  border: `1px solid ${_variables.grey}`,
  borderRadius: 3,
  margin: 5,
  overflow: 'hidden',
  paddingBottom: 28,
  position: 'relative',
  height: 318,
  width: 318,
  '&:hover': {
    cursor: 'pointer'
  },
  '& img': {
    width: '100%'
  }
})

const Post = props => (
  <PostWrapper onClick={() => props.handleClick(props.relativePath)}>
    <img src={props.fullPath} alt={props.filename} />
    {props.statusMessage ? (
      <Notification theme="notice" text={props.statusMessage} />
    ) : (
      ''
    )}
  </PostWrapper>
)
export default Post
