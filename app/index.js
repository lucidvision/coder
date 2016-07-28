/* @flow */
'use strict';

import React, { Component } from 'react';
import {
  Navigator,
  Text,
} from 'react-native';
import Login from './components/login/loginContainer';

import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDylouN6JC-RCPjhY9arzaTHH8fPnzcsLk",
    authDomain: "coder-9b06c.firebaseapp.com",
    databaseURL: "https://coder-9b06c.firebaseio.com",
    storageBucket: "coder-9b06c.appspot.com",
  };
const firebaseApp = firebase.initializeApp(config);

const ROUTES = {
  login: Login
}

export default class Index extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name:'login'}}
        renderScene={this.renderScene}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }} />
    )
  }

  renderScene(route, navigator) {
    const Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  }
}
