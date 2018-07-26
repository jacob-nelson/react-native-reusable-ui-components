import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import {colours} from "./styles/common";

export default class RNCard extends Component {
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
    cardTheme = this.props.theme ? themes[this.props.theme] : themes['primary'];
    const style = styles(this.props);
    return (
      <View style={style.container}>
        <View style={style.header}>
            <Text style={style.headerText}>Card Header</Text>
        </View>
        <View>
            <Text style={style.body}>Card Body</Text>
        </View>
        <View style={style.footer}>
            <Text style={style.headerText}>Card Footer</Text>
        </View>                
      </View>
    );
  }
}

const styles = (props) => StyleSheet.create({
  container: StyleSheet.flatten([
    {
      alignSelf: 'stretch',
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 3,  
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5
    },
    props.rounded && {
      borderRadius: 5
    }
  ]),
  header: {
        //backgroundColor: cardTheme,
        borderBottomWidth: 1,
        borderColor: '#ccc',

    }, 
  footer: {
        //backgroundColor: cardTheme,
        borderTopWidth: 1,
        borderColor: '#ccc',

    },    
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: cardTheme,
        textAlign: 'center',
        lineHeight: 70   
    }, 
    body: {
        fontSize: 30,
        color: '#212529',
        padding: 15,
    },  
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('RNCard', () => RNCard);