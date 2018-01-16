import React from 'react'
import { BASE_IMAGE_URL } from '../constants'
import glamorous from 'glamorous'
import _variables from '../styles/_variables'

const PostWrapper = glamorous.div({
  backgroundColor: _variables.white,
  border: `1px solid ${_variables.grey}`,
  borderRadius: 3,
  margin: 5,
  overflow: 'hidden',
  paddingBottom: 28,
  width: 236,
  '& img': {
    width: '100%'
  }
})

const Post = props => (
  <PostWrapper>
    <img src={BASE_IMAGE_URL + props.path} alt="" />
  </PostWrapper>
)
export default Post
