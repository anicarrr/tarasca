import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MenuButton from './components/menuButton';
import Balance from './components/balance';
import Movements from './components/movements';

export default class tarasca extends Component {
  state = {
    amount: 0
  }
  
  handleOnSubmit = form => {
    this.setState({
      amount: form.amount
    })
  }

  render() {
    return (
      <View style={styles.content}>
        <Balance amount={this.state.amount} />
        <Movements />
        <MenuButton onSubmit={this.handleOnSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex:1, 
    backgroundColor: '#f3f3f3'
  }
});

AppRegistry.registerComponent('tarasca', () => tarasca);
