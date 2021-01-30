import React from 'react';
import {View, Text, Image} from 'react-native';
import {cartItem_style} from '../styles/component_styles';

export function CartItem({item}) {
  return (
    <View>
      <View style={cartItem_style.container}>
        <Image source={{uri: item.image}} style={cartItem_style.image} />

        <Text style={cartItem_style.title}>{item.title}</Text>
        <Text style={cartItem_style.price}>{item.price} TL</Text>
      </View>
    </View>
  );
}
