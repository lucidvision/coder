/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Index from './app/index';

class coder extends Component {
  render() {
    return (
      <Index />
    );
  }
}

AppRegistry.registerComponent('coder', () => coder);
