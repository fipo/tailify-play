import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from '../components/PostList'

class PostListContainer extends Component {
  render() {
    return <PostList {...this.props} />
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(PostListContainer)
