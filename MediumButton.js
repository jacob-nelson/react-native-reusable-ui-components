import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import {colours} from "./styles/common";

export default class MediumButton extends Component {
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
      "warning": colours.warning,
      "secondary": colours.secondary
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
      padding: 15,
      height: 60,
      alignItems: 'center',
      backgroundColor: themes["primary"],
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: themes[props.theme],      
    },
    props.theme && {
      backgroundColor: themes[props.theme]      
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },    
    props.outline && {
      color: themes[props.theme]    
    },
  ]),  
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('MediumButton', () => MediumButton);