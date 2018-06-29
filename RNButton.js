import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import {colours} from "./styles/common";

export default class RNButton extends Component {
    constructor(props) {
        super(props)
    }
     
  render() {
    themes = {
      "primary": colours.primary,
      "success": colours.success,
      "dark": colours.dark,
      "info": colours.info,
      "danger": colours.danger,
      "warning": colours.warning     
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
      padding: 25,
      height: 90,
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
      color: themes[props.theme]    
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