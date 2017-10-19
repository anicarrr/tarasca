import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet } from 'react-native';
import ButtonSubmit from './buttonSubmit';
import MoneyInput from './moneyInput';

export default class CreditForm extends Component {
  state = {
    form: {
      amount: 0
    }
  }

  handleOnChange = (value) => {
    this.setState({ form: { amount: value } });
  }

  checkBeforeSubmit = () => {
    const { form } = this.state;
    if (form.amount === 0) return;
    this.props.onSubmit(form);
  }

  render () {
    return (
      <View style={styles.content}>
        <MoneyInput value={this.state.form.amount} onChange={this.handleOnChange} />
        <ButtonSubmit onPress={this.checkBeforeSubmit}>
          add credit
        </ButtonSubmit>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  }
});

AppRegistry.registerComponent('CreditForm', () => CreditForm);