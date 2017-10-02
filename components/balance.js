import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

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
    const { balance } = this.state;
    const color = balance >= 0 ? 'green' : 'red';
    const moneySign = balance >= 0 ? '$' : '-$';
    const balanceAbs = Math.abs(balance);

    return (
      <View style={styles.content}>
        <Text style={[styles.balance, { color }]}>
          {moneySign}{balanceAbs}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 2,
    marginTop: 20,
    alignItems: 'center'
  },
  balance: {
    fontSize: 60
  },
});

AppRegistry.registerComponent('Balance', () => Balance);
