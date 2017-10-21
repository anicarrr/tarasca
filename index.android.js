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
import ContentModal from './components/contentModal';

export default class tarasca extends Component {
  state = {
    amount: 0,
    contentToShow: ''
  }
  
  handleSubmit = form => {
    this.setState({
      amount: form.amount
    })
  }

  handleActiveModal = showThisOne => {
    this.setState({
      contentToShow: showThisOne
    });
  }

  componentDidUpdate() {
    this.setState({
      amount: 0,
      contentToShow: ''
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextState.contentToShow || nextState.amount !== 0;
  }

  render() {
    return (
      <View style={styles.content}>
        <Balance amount={this.state.amount} />
        <Movements />
        <ContentModal contentToShow={this.state.contentToShow} onSubmit={this.handleSubmit} />
        <MenuButton onActiveModal={this.handleActiveModal} />
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
