/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//References
//https://revelry.co/styles-in-react-native/

import React, { Component } from 'react';
import {
  View,
  Alert
} from 'react-native';

import LargeButton from './LargeButton';

export default class App extends Component {
  constructor(props) {
    super(props);
  }  

  _onButtonPress() {
    Alert.alert('You tapped the button! on parent')
  }

  render() {
    return (
      <View>
        <LargeButton value="Button Text" theme="primary" outline rounded onPress={this._onButtonPress} />
      </View>
    );
  }
}