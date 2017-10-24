import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet } from 'react-native';
import ButtonSubmit from './buttonSubmit';
import MoneyInput from './moneyInput';
import AutocompleteInput from './autocompleteInput';
import { getDateNow } from '../utils/utils';

export default class ExpensesForm extends Component {
  form = {
    amount: 0,
    id: '',
    date: '',
    reason: ''
  }

  handleMoneyOnChange = (value) => {
    this.form.amount = value;
  }

  handleAutocompleteOnChange = (value) => {
    this.form.reason = value;
  }

  checkBeforeSubmit = () => {
    const { form } = this;
    if (form.amount === 0) return;

    form.date = getDateNow();
    form.reason = form.reason; 
    form.id = Math.random().toString(36).substring(7);
    form.amount = -Math.abs(form.amount);
    
    this.props.onSubmit(form);
  }

  shouldComponentUpdate() {
    return this.form.amount > 0;
  }

  render () {
    return (
      <View style={styles.content}>
        <MoneyInput value={this.form.amount} onChange={this.handleMoneyOnChange} />
        <AutocompleteInput placeholder="Reason" onChange={this.handleAutocompleteOnChange} />
        <ButtonSubmit onPress={this.checkBeforeSubmit}>
          add expense
        </ButtonSubmit>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: 25
  }
});

AppRegistry.registerComponent('ExpensesForm', () => ExpensesForm);