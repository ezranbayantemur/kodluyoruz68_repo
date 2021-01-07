import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {search_bar} from '../styles/components_styles';

export function SearchBar(props) {
  const [searchedValue, setSearchedValue] = useState('');

  return (
    <View style={search_bar.container}>
      <View style={search_bar.inputContainer}>
        <TextInput
          placeholder="İş aramak için yazın.."
          onChangeText={(val) => setSearchedValue(val)}
        />
      </View>
      <TouchableOpacity
        style={search_bar.iconContainer}
        onPress={() => props.onSearch(searchedValue)}>
        <Icon name="magnify" color="white" size={25} />
      </TouchableOpacity>
    </View>
  );
}
