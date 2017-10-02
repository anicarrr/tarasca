/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MenuButton from './components/menuButton';
import Balance from './components/balance';

export default class tarascaap extends Component {
  state = {
    amount: 0
  }
  
  handleOnSubmit = form => {
    this.setState({
      amount: form.amount
    })
  }

  render() {
    return (
      <View style={styles.content}>
        <Balance amount={this.state.amount} />
        <MenuButton onSubmit={this.handleOnSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex:1, 
    backgroundColor: '#f3f3f3'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

AppRegistry.registerComponent('tarascaap', () => tarascaap);
