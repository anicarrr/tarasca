import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';

class Movements extends Component  {
  state = {
    list: []
  };

  componentDidMount() {
   
  }

  componentWillReceiveProps(nextProps)  {
    if (!nextProps.movement.id) return;
    
    var listMovements = [...this.state.list];
    listMovements.unshift(nextProps.movement);

    this.setState({
      list: listMovements
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.movement.id !== undefined && 
           nextProps.movement.id !== 0;
  }

  _keyExtractor = (item, index) => index;

  _renderItem = data => {
    const { item } = data; 
    const backgroundColor = data.index % 2 ? '#cce0e3' : '#97cfd8'; 
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
          data={this.state.list}
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