import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {products_style} from '../styles/component_styles';

export function Product({item, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={products_style.container}>
        <Image source={{uri: item.image}} style={products_style.image} />

        <Text style={products_style.title}>{item.title}</Text>
        <Text style={products_style.price}>{item.price} TL</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
