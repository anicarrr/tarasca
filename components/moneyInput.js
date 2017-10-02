import React, { Component } from 'react';
import { Text, TouchableOpacity, View, AppRegistry, TextInput, StyleSheet, } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export default class MoneyInput extends Component {

  handleValueChange = (value) => {
    var rawAmount = this.refs['rawAmount'].getRawValue();
    this.props.onChange(rawAmount);
  }

  render () {
    return (
        <TextInputMask
          ref="rawAmount"
          type={'money'}
          style={styles.moneyInput}
          options={{ unit: '$', zeroCents: true, precision: 0}}
          placeholder="$0.00"
          onChangeText={this.handleValueChange}
          value={this.props.value}
        />
    )
  }
}

const styles = StyleSheet.create({
  moneyInput: {
    fontSize: 30,
  }
});

AppRegistry.registerComponent('MoneyInput', () => MoneyInput);