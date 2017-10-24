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
      { title: 'Rocky IV' },
      { title: 'Rocky V' },
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
        return source.includes(searchTerm); 
      }
    }
  }

  findItem(query) {
    if (!query || query.length === 1) return [];

    const { items } = this.state;
    return items.filter(film => this.find(query).in(film.title)).slice(0,1);
  }

  handleOnChangeText = (text) => {
    this.setState({ 
      query: text,
      hideResults: false 
    }, this.emitTextValue(text));
  }

  emitTextValue = (value) => {
    this.props.onChange(value);
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
            <TouchableOpacity onPress={() => this.setState({query: title, hideResults: true}, this.emitTextValue(title))}>
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
    zIndex: 1
  },
  itemText: {
    fontSize: 15,
    margin: 5
  }
});

export default AutocompleteInput;