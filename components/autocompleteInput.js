import Autocomplete from 'react-native-autocomplete-input';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class AutocompleteInput extends Component {
  state = {
    items: [],
    query: '',
    hideResults: false
  }

  componentDidMount() {
    const items = [
      { title: 'Rocky II' },
      { title: 'Rocky III' },
      { title: 'Club de la pelea' },
      { title: 'Moonlight' }
    ];
      this.setState({ items });
  }

  find(a) {
    var searchTerm = a.toLowerCase().trim();
    return {
      in: (b) => {
        var source = b.toLowerCase().trim();
        return source.contains(searchTerm); 
      }
    }
  }

  findItem(query) {
    if (!query) return [];

    const { items } = this.state;
    return items.filter(film => this.find(query).in(film.title));
  }

  handleOnChangeText = (text) => {
    this.setState({ 
      query: text,
      hideResults: false 
    });
  }

  handleOnPress = (selectedValue) => {
    this.setState({ 
      query: selectedValue,
      hideResults: true 
    });
  }

  render() {
    const { query, hideResults } = this.state;
    const { placeholder } = this.props;
    const items = this.findItem(query);

    return (
      <View style={styles.container}>
        <Autocomplete
          containerStyle={styles.autocompleteContainer}
          data={items}
          defaultValue={query}
          hideResults={hideResults}
          onChangeText={this.handleOnChangeText}
          placeholder={placeholder}
          renderItem={({ title }) => (
            <TouchableOpacity onPress={() => this.setState({query: title, hideResults: true})}>
              <Text style={styles.itemText}>
                {title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 75
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 0
  },
  itemText: {
    fontSize: 15,
    margin: 2
  }
});

export default AutocompleteInput;