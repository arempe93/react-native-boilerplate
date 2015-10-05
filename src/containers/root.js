/* @flow */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Scene from '../components/scene'

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Scene />
      </Provider>
    )
  }
}

export default Root
