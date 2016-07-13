/* @flow */

import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { Provider } from 'react-redux'

import App from './app'

import store from '../store'

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key='root'>
            <Scene key='pageOne' component={App} title='Sample App' initial={true} />
          </Scene>
        </Router>
      </Provider>
    )
  }
}

export default Root
