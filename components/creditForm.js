import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet } from 'react-native';
import ButtonSubmit from './buttonSubmit';
import MoneyInput from './moneyInput';
import { getDateNow } from '../utils/utils';

export default class CreditForm extends Component {
  form = {
    amount: 0,
    id: '',
    date: '',
    reason: ''
  }

  handleOnChange = (value) => {
    this.form.amount = value;
  }

  checkBeforeSubmit = () => {
    const { form } = this;
    if (form.amount === 0) return;
    form.date = getDateNow();
    form.reason = 'Credit'; 
    form.id = Math.random().toString(36).substring(7);
    this.props.onSubmit(form);
  }

  render () {
    return (
      <View style={styles.content}>
        <MoneyInput value={this.form.amount} onChange={this.handleOnChange} />
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