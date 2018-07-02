import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import {colours} from "./styles/common";

export default class LargeButton extends Component {
    constructor(props) {
        super(props)
    }

  _disabledButtonPressed(){

  }

  render() {
    themes = {
      "primary": colours.primary,
      "success": colours.success,
      "dark": colours.dark,
      "info": colours.info,
      "danger": colours.danger,
      "warning": colours.warning,
      "secondary": colours.secondary      
    }
    buttonTheme = this.props.theme ? themes[this.props.theme] : themes['primary'];
    const style = styles(this.props);
    return (
      <View style={{alignSelf: 'flex-start'}}>
        <TouchableOpacity activeOpacity={0.8} 
        style={style.button}
        onPress={this.props.disabled ? this._disabledButtonPressed : this.props.onPress}
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
      padding: 25,
      height: 90,
      alignItems: 'center',
      backgroundColor: buttonTheme,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: buttonTheme   
    },
    props.theme && {
      backgroundColor: buttonTheme,
      borderColor: buttonTheme    
    },
    props.disabled && {
      opacity: 0.8,
    },
    props.outline && {
      backgroundColor: 'transparent'      
    },
    props.rounded && {
      borderRadius: 5
    }
  ]),
  buttonText: StyleSheet.flatten([
{
    fontSize: 30,
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