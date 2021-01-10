import React from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import {posts_item} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function PostItem({item, onLike}) {
  return (
    <TouchableWithoutFeedback>
      <View style={posts_item.container}>
        <Text style={posts_item.name}>{item.title}</Text>
        <Text>{item.body}</Text>
        <Icon
          // eslint-disable-next-line react-native/no-inline-styles
          style={{alignSelf: 'flex-end'}}
          name="heart-outline"
          color="red"
          size={25}
          onPress={onLike}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
