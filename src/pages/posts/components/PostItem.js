import React from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import {posts_item} from './styles';

export function PostItem({item}) {
  return (
    <TouchableWithoutFeedback>
      <View style={posts_item.container}>
        <Text style={posts_item.name}>{item.title}</Text>
        <Text>{item.body}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
