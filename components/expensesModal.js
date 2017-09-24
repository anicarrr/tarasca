import React, { Component } from 'react';
import { Text, TouchableOpacity, View, AppRegistry, TextInput, StyleSheet, } from 'react-native';
import Modal from 'react-native-modal';
import { TextInputMask } from 'react-native-masked-text';

export default class ExpensesModal extends Component {
  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>agregar</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <TextInputMask
        ref={'moneyInput'}
        type={'money'}
        style={styles.moneyInput}
        options={{ unit: '$', zeroCents: true, precision: 0}}
        placeholder="$0.00"
      />
      {this._renderButton('Close', () => this.setState({ isModalVisible: false }))}
    </View>
  );

  componentWillReceiveProps(nextProps) {
    this.setState({ isModalVisible: true });
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  moneyInput: {
    fontSize: 30,
  }
});

AppRegistry.registerComponent('ExpensesModal', () => ExpensesModal);