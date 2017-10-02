import React, { Component } from 'react';
import { Text, TouchableOpacity, View, AppRegistry, TextInput, StyleSheet, } from 'react-native';

export default class buttonSubmit extends Component {

  handlePress = () => {
    this.props.onPress();
  }

  render () {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.button}>
          <Text>{this.props.children}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  }
});

AppRegistry.registerComponent('buttonSubmit', () => buttonSubmit);