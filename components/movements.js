import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerDate}>Date</Text>
    <Text style={styles.headerReason}>Reason</Text>
    <Text style={styles.headerAmount}>Amount</Text>
  </View>
);

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
        <Text style={styles.itemDate}>{item.date}</Text>
        <Text style={styles.itemReason}>{item.reason}</Text>
        <Text style={[styles.itemAmount, { color }]}>{moneySign}{amount}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
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

const headerStyle = {
  fontSize: 18,
  color: 'gray'
}

const itemStyle = {
  fontSize: 16,
  color: 'black'
}

const listContainer = {
  justifyContent: 'flex-start',
  flexDirection: 'row'
}

const styles = StyleSheet.create({
  container: {
    flex: 3
  },
  headerDate: {
    flex: 2,
    marginLeft: 10,
    ...headerStyle
  },
  headerReason: {
    flex: 3.5,
    ...headerStyle
  },
  headerAmount: {
    flex: 1.4,
    marginRight: 5,
    ...headerStyle
  },
  headerContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 0.3,
    borderColor: 'black',
    ...listContainer
  },
  itemContainer: {
    flex: 1,
    ...listContainer
  },
  itemDate: {
    flex: 2,
    marginLeft: 10,
    ...itemStyle
  },
  itemReason: {
    flex: 3.5,
    marginLeft: 3.4,
    ...itemStyle
  },
  itemAmount: {
    flex: 1.4,
    textAlign: 'right',
    marginRight: 11,
    ...itemStyle
  },
});

export default Movements;