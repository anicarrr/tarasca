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
import ActionsButton from './components/actionsButton';
import Balance from './components/balance';

export default class tarascaap extends Component {
  state = {
    amount: 0
  }
  
  handleAmount = value => {
    this.setState({amount: value})
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <Balance amount={this.state.amount} />
        <ActionsButton onNewAmount={this.handleAmount} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

AppRegistry.registerComponent('tarascaap', () => tarascaap);
