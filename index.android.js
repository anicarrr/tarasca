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
    form: {
      amount: 0,
      id: 0,
      date: '',
      reason: ''
    },
    contentToShow: ''
  }
  
  handleSubmit = form => {
    this.setState({ form });
  }

  handleActiveModal = showThisOne => {
    this.setState({
      contentToShow: showThisOne
    });
  }

  componentDidUpdate() {
    this.setState({
      form: { amount: 0 },
      contentToShow: ''
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextState.contentToShow || nextState.form.amount !== 0;
  }

  render() {
    const { form, contentToShow } = this.state;
    return (
      <View style={styles.content}>
        <Balance amount={form.amount} />
        <Movements movement={form} />
        <ContentModal contentToShow={contentToShow} onSubmit={this.handleSubmit} />
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
