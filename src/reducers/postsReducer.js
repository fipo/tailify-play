import { GET_POSTS } from '../actions/actionTypes'
import { BASE_IMAGE_URL } from '../constants'

export default function postsReducer(state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      const newState = action.payload
      newState.map((post, index) => {
        const metaDetails = {
          id: index,
          path: BASE_IMAGE_URL + post.path,
          statusMessage: '',
          filename: post.path.replace(/^.*[\\/]/, '')
        }
        return Object.assign(post, metaDetails)
      })

      return newState
    default:
      return state
  }
}
