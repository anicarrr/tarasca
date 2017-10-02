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
      isModalVisible: true,
      contentToShow: nextProps.contentToShow
    });
  }

  _renderModalContent() {
    switch (this.state.contentToShow) {
      case 'credit':
        return <CreditForm onSubmit={this.handleSubmit} /> 
      
      case 'expenses':
        return <ExpensesForm onSubmit={this.handleSubmit} />

      default: 
        return ''
    }
  }

  hideModal = (callback) => { this.setState({ isModalVisible: false }, callback) };

  handleSubmit = (form) => {
    this.hideModal(() => {
      this.props.onSubmit(form);
    });
  }

  render () {
    return (
      <View>
        <Modal 
          isVisible={this.state.isModalVisible}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
        >
          {this._renderModalContent()}
        </Modal>
      </View>
    )
  }
}

AppRegistry.registerComponent('ContentModal', () => ContentModal);