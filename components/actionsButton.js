import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ExpensesModal from './expensesModal';

export default class ActionsButton extends Component {
  state = {
    showModal: false,
  }

  activeExpensesModal() {
    this.setState({showModal: true});
  } 

  render() {
    return (
      <View style={{flex:2}}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#3498db' title="Historial" onPress={() => {}}>
            <Icon name="md-paper" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#9b59b6' title="Agregar gastos" onPress={() => this.activeExpensesModal()}>
            <Icon name="logo-usd" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        <ExpensesModal show={this.state.showModal} />
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

AppRegistry.registerComponent('ActionsButton', () => ActionsButton);
