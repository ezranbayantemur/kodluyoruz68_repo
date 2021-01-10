import React from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import {friends_item} from './styles';

export function FriendsItem({item, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={friends_item.container}>
        <Text style={friends_item.name}>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
