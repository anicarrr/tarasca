import React, { Component } from 'react';
import { Text, TouchableOpacity, View, AppRegistry, TextInput, StyleSheet, } from 'react-native';
import Modal from 'react-native-modal';
import { TextInputMask } from 'react-native-masked-text';
import CreditForm from './creditForm';
import ExpensesForm from './expensesForm';

export default class ContentModal extends Component {
  state = {
    isModalVisible: false,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      isModalVisible: true
    });
  }

  hideModal = () => { 
    return new Promise(resolve => {
      this.setState({ isModalVisible: false }, () => resolve())
    })
  };

  handleSubmit = (form) => {
    this.hideModal().then(() => {
      this.props.onSubmit(form);
    });
  }

  render () {
    const { contentToShow } = this.props;
    const { isModalVisible } = this.state;
    return (
      <View>
        <Modal 
          isVisible={isModalVisible}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          onBackdropPress={this.hideModal}
        >
          {
            contentToShow === 'credit' 
              ? <CreditForm onSubmit={this.handleSubmit} /> 
              : 
            contentToShow === 'expenses' 
              && <ExpensesForm onSubmit={this.handleSubmit} />
          }
        </Modal>
      </View>
    )
  }
}

AppRegistry.registerComponent('ContentModal', () => ContentModal);