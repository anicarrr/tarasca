import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Money from './money';

export default class Balance extends Component {
  state = {
    balance: 0
  }

  componentWillReceiveProps(nextProps) {
    this.setState(prev => {
      return { 
        balance: prev.balance + nextProps.amount
      };
    });
  }

  render() {
    return (
      <View style={styles.content}>
        <Money fontSize={60}>{this.state.balance}</Money>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('Balance', () => Balance);
