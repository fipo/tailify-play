import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './styles/global.css'
import TwoColumn from './layouts/TwoColumn'
import PostListContainer from './containers/PostListContainer'

import { getPosts } from './actions/postActions'
store.dispatch(getPosts())

const App = () => (
  <Provider store={store}>
    <TwoColumn>
      <PostListContainer />
    </TwoColumn>
  </Provider>
)

export default App
