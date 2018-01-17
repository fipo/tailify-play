import { GET_POSTS, POST_SUCCESS, POST_FAIL } from '../actions/actionTypes'
import { BASE_IMAGE_URL } from '../constants'

export default function postsReducer(state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      const newState = action.payload
      newState.map((post, index) => {
        const metaDetails = {
          id: index,
          fullPath: BASE_IMAGE_URL + post.path,
          relativePath: post.path,
          statusMessage: '',
          statusURI: '',
          filename: post.path.replace(/^.*[\\/]/, '')
        }
        return Object.assign(post, metaDetails)
      })

      return newState

    case POST_SUCCESS:
      const updateState = state.map(post => {
        if (post.relativePath === action.payload.data.filename) {
          const postUpdates = {
            statusMessage: 'Pastebin has been updated!',
            statusURI: action.payload.data.uri
          }
          Object.assign(post, postUpdates)
        }
        return post
      })

      return updateState

    case POST_FAIL:
      return state

    default:
      return state
  }
}
