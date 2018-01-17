import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from '../components/PostList'
import { postInPastebin } from '../actions/postActions'

class PostListContainer extends Component {
  handleOnPostClick = imageURL => {
    this.props.dispatchUpdatePastebin(imageURL)
  }

  render() {
    return <PostList {...this.props} handleClick={this.handleOnPostClick} />
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  dispatchUpdatePastebin(imageURL) {
    dispatch(postInPastebin(imageURL))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)
