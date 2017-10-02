import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet } from 'react-native';
import ButtonSubmit from './buttonSubmit';
import MoneyInput from './moneyInput';

export default class ExpensesForm extends Component {
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
    const amountToNegative = -Math.abs(form.amount);
    this.setState({ form: { amount: amountToNegative } }, () => {
      this.props.onSubmit(this.state.form);
    });
  }

  shouldComponentUpdate() {
    return this.state.form.amount > 0;
  }

  render () {
    return (
      <View style={styles.content}>
        <MoneyInput value={this.state.form.amount} onChange={this.handleOnChange} />
        <ButtonSubmit onPress={this.checkBeforeSubmit}>
          agregar gasto
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

AppRegistry.registerComponent('ExpensesForm', () => ExpensesForm);