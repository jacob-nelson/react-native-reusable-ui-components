import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import {primary, secondary, colours} from "./styles/common";

export default class LargeButton extends Component {
    constructor(props) {
        super(props)
    }
     
  render() {
    themes = {
      "primary": colours.primary,
      "secondary": secondary
    }
    const style = styles(this.props);
    return (
      <View style={{alignSelf: 'flex-start'}}>
        <TouchableOpacity
        style={style.button}
        onPress={this.props.onPress}
        >
          <Text style={style.buttonText}>{this.props.value}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = (props) => StyleSheet.create({
  button: StyleSheet.flatten([
    {
      alignItems: 'center',
      padding: 20,
      height: 70,
      backgroundColor: themes[props.theme]
    },
    props.outline && {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: themes[props.theme],
      backgroundColor: 'transparent'      
    },
    props.rounded && {
      borderRadius: 5
    }
  ]),
  buttonText: StyleSheet.flatten([
{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },    
    props.outline && {
      color: themes[props.theme]    
    },
  ]),  
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('LargeButton', () => LargeButton);