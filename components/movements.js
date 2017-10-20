import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';

class Movements extends React.PureComponent  {
  state = {
    list: []
  }

  componentDidMount() {
   
  }

  getList = () => {
    return [
      {id: 1, reason: 'Uno', date: '10/12/2017', amount: '500'}, 
      {id: 2, reason: 'Dos', date: '10/12/2017', amount: '-500'},
      {id: 3, reason: 'Tres', date: '10/12/2017', amount: '500'},
      {id: 4, reason: 'Cuatro', date: '10/12/2017', amount: '-500'},
      {id: 5, reason: 'Cinco', date: '10/12/2017', amount: '500'},
      {id: 6, reason: 'Seis', date: '10/12/2017', amount: '500'},
      {id: 7, reason: 'Siete', date: '10/12/2017', amount: '500'},
      {id: 8, reason: 'Ocho', date: '10/12/2017', amount: '500'},
      {id: 9, reason: 'Nueve', date: '10/12/2017', amount: '500'},
      {id: 10, reason: 'Diez', date: '10/12/2017', amount: '500'}
    ];
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = data => {
    const { item } = data; 
    const backgroundColor = item.id % 2 ? '#cce0e3' : '#97cfd8'; 
    const color = item.amount >= 0 ? 'green' : 'red';
    const moneySign = item.amount >= 0 ? '$' : '-$';
    const amount = Math.abs(item.amount);
    return (
      <View style={[styles.itemContainer, { backgroundColor }]}>
        <Text style={styles.item}>{item.date}</Text>
        <Text style={styles.item}>{item.reason}</Text>
        <Text style={[styles.item, { color }]}>{moneySign}{amount}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.getList()}
          numColumns={1}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    borderTopWidth: 2,
    borderColor: 'black'
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    fontSize: 18
  }
});

export default Movements;