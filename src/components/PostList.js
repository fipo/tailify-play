import React from 'react'
import Post from './Post'
import glamorous from 'glamorous'

const PostListWrapper = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 auto',
  width: 984
})
const PostList = ({ posts }) => (
  <PostListWrapper>
    {posts.map(post => <Post key={post.id} {...post} />)}
  </PostListWrapper>
)
export default PostList
