/* @flow */
'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import style from '../shared/styles'
import loginStyle from './loginStyles';

export default class LoginContainer extends Component {
  constructor(props) {
    super(props)

    this.state ={
      username: ''
    };
  }

  render() {
    return(
      <View style={style.container}>
        <View style={loginStyle.container}>
          <TextInput
            style={loginStyle.inputField}
            value={this.state.username}
            placeholder={'Username'}
            maxLength={12}
            onChangeText={(val) => this.setState({username: val})} />
          <TouchableHighlight
            style={loginStyle.loginButton}
            onPress={this.onLoginPressed}>
            <Text style={loginStyle.loginButtonLabel}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  onLoginPressed() {

  }
}
