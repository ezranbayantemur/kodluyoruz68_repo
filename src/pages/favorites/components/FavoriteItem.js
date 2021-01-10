import React from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import {favorite_item} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function FavoriteItem({item, onLike}) {
  return (
    <TouchableWithoutFeedback>
      <View style={favorite_item.container}>
        <Text style={favorite_item.name}>{item.title}</Text>
        <Text>{item.body}</Text>
        <Icon
          // eslint-disable-next-line react-native/no-inline-styles
          style={{alignSelf: 'flex-end'}}
          name="heart"
          color="red"
          size={25}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
