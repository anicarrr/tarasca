import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MenuButton extends Component {
  activeCreditModal = () => {
    this.props.onActiveModal('credit');
  }

  activeExpensesModal = () => {
    this.props.onActiveModal('expenses');
  }  

  render() {
    return (
      <ActionButton buttonColor="rgba(231,76,60,1)" bgColor="rgba(0,0,0,.4)" >
        <ActionButton.Item buttonColor='#3498db' title="History" onPress={() => {}}>
          <Icon name="md-paper" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#3498db' title="Add credit" onPress={this.activeCreditModal}>
          <Icon name="logo-usd" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#9b59b6' title="Add expense" onPress={this.activeExpensesModal}>
          <Icon name="logo-usd" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
});

AppRegistry.registerComponent('MenuButton', () => MenuButton);
