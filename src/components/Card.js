import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {card_item_style} from '../styles/components_style';

const Card = ({news, onClick}) => {
  return (
    <Pressable style={card_item_style.container} onPress={onClick}>
      <Image style={card_item_style.image} source={{uri: news.imageUrl}} />
      <View style={card_item_style.footerContainer}>
        <Text style={card_item_style.title}>{news.title}</Text>
        <Text numberOfLines={2}>{news.description}</Text>
        <Text style={card_item_style.author}>{news.author}</Text>
      </View>
    </Pressable>
  );
};

export {Card};
