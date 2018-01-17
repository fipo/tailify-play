import React from 'react'
import Post from './Post'
import glamorous from 'glamorous'

const PostListWrapper = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 auto',
  width: 984
})
const PostList = ({ posts, handleClick }) => (
  <PostListWrapper>
    {posts.map(post => (
      <Post key={post.id} {...post} handleClick={handleClick} />
    ))}
  </PostListWrapper>
)
export default PostList
