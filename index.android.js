/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ActionsButton from './components/actionsButton';

export default class tarascaap extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <ActionsButton />
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

AppRegistry.registerComponent('tarascaap', () => tarascaap);
