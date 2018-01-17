import React from 'react'
import TwoColumn from '../layouts/TwoColumn'
import PostListContainer from '../containers/PostListContainer'

const Home = props => (
  <TwoColumn>
    <PostListContainer />
  </TwoColumn>
)

export default Home
