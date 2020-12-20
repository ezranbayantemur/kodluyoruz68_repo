import React from 'react';
import {View, TouchabeOpacity, Text, Image} from 'react-native';
import {card_item_style} from '../styles/components_style';

const Card = ({news}) => {
  return (
    <View style={card_item_style.container}>
      <Text>{news.description}</Text>
    </View>
  );
};

export {Card};
