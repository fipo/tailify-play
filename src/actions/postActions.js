import { GET_POSTS, POST_SUCCESS, POST_FAIL } from './actionTypes'
import { API_URL, PASTEBIN_KEY } from '../constants'

import axios from 'axios'

export function getPosts() {
  return dispatch => {
    axios
      .get(`${API_URL}/list`)
      .then(response => dispatch({ type: GET_POSTS, payload: response.data }))
      .catch(error => console.error('getPosts failed:', error))
  }
}

export function postInPastebin(imageURL) {
  const headers = {
    'Content-Type': 'application/json'
  }
  const payload = {
    filename: imageURL,
    pastebin_api_key: PASTEBIN_KEY
  }

  return dispatch => {
    axios
      .post(`${API_URL}/upload`, payload, headers)
      .then(response => {
        if (response.status === 200 && response.data.uri !== undefined) {
          dispatch(postInPastebinSuccess(response))
        } else {
          dispatch(postInPastebinFail(response.statusText))
        }
      })
      .catch(error => {
        dispatch(postInPastebinFail(error))
        console.error('postInPastebin failed:', error)
      })
  }
}

function postInPastebinSuccess(response) {
  return { type: POST_SUCCESS, payload: response }
}

function postInPastebinFail(response) {
  return { type: POST_FAIL, payload: response }
}
