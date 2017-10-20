import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ContentModal from './contentModal';

export default class MenuButton extends Component {
  state = {
    contentToShow: ''
  }

  activeCreditModal = () => {
    this.setState({
      contentToShow: 'credit'
    });
  }

  activeExpensesModal = () => {
    this.setState({
      contentToShow: 'expenses'
    });
  }  

  handleSubmit = value => {
    this.props.onSubmit(value);
  }

  render() {
    return (
      <View style={styles.content}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
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
        <ContentModal contentToShow={this.state.contentToShow} onSubmit={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    left: '31%',
    position: 'absolute',
    top: '43%',
    height: 350,
    width: 250
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
});

AppRegistry.registerComponent('MenuButton', () => MenuButton);
