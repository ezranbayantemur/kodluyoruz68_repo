import React from 'react';
import {View, TouchabeOpacity, Text, Image} from 'react-native';
import {card_item_style} from '../styles/components_style';

// {
//   "id": 0,
//   "author": "Omkar Godbole",
//   "title": "Bulls Exit BitMEX Bitcoin Futures Market",
//   "description": "Since the announcement from U.S. regulators, BitMEX has witnessed an outflow of more than 40,000 bitcoins, currently worth more than $422 million.",
//   "imageUrl": "https://static.coindesk.com/wp-content/uploads/2020/10/BitMEX-1180x628.png"
// },

const Card = ({news}) => {
  return (
    <View style={card_item_style.container}>
      <Image style={card_item_style.image} source={{uri: news.imageUrl}} />
      <Text style={card_item_style.title}>{news.title}</Text>
      <Text>{news.description}</Text>
      <Text style={card_item_style.author}>{news.author}</Text>
    </View>
  );
};

export {Card};
