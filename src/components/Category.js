import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {category_style} from '../styles/component_styles';

export function Category({item, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={category_style.container}>
        <Text style={category_style.title}>{item}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
