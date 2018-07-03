import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import {colours} from "./styles/common";

export default class RNButton extends Component {
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
      <View style={style.container}>
        <TouchableOpacity activeOpacity={0.6}
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
  container: StyleSheet.flatten([
    {
      alignSelf: 'flex-start'
    },
    props.block && {
      alignSelf: 'stretch'
     },    
  ]),
  button: StyleSheet.flatten([
    {
      padding: 25,
      height: 90,
      alignItems: 'center',
      backgroundColor: buttonTheme,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: buttonTheme,
    },
    props.disabled && {
      opacity: 0.6,
     },
    props.outline && {
      backgroundColor: 'transparent'      
    },
    props.rounded && {
      borderRadius: 5
    },
    props.lg && {
      padding: 25,
      height: 90,
    },
    props.md && {
      padding: 15,
      height: 60,
    },
    props.sm && {
      padding: 10,
      height: 45,
    },
    props.xs && {
      padding: 10,
      height: 35,
    }
  ]),
  buttonText: StyleSheet.flatten([
{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },    
    props.outline && {
      color: buttonTheme    
    },
    props.lg && {
        fontSize: 30,
    },
    props.md && {
        fontSize: 20,
    },
    props.sm && {
        fontSize: 15,
    },
    props.xs && {
        fontSize: 10,
    }
  ]),  
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('RNButton', () => RNButton);