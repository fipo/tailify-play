import { GET_POSTS } from './actionTypes'
import { API_URL } from '../constants'

import axios from 'axios'

export function getPosts() {
  return dispatch => {
    axios
      .get(`${API_URL}list`)
      .then(response => dispatch({ type: GET_POSTS, payload: response.data }))
      .catch(error => console.error('getPosts failed:', error))
  }
}
