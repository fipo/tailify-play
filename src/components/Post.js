import React from 'react'
import glamorous from 'glamorous'
import _variables from '../styles/_variables'

const PostWrapper = glamorous.div({
  backgroundColor: _variables.white,
  border: `1px solid ${_variables.grey}`,
  borderRadius: 3,
  margin: 5,
  overflow: 'hidden',
  paddingBottom: 28,
  height: 318,
  width: 318,
  '& img': {
    width: '100%'
  }
})

const Post = props => (
  <PostWrapper>
    <img src={props.path} alt={props.filename} />
  </PostWrapper>
)
export default Post
