import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {empty_list} from '../styles/components_styles';

export function EmptyList() {
  return (
    <View style={empty_list.container}>
      <Icon name="delete-empty-outline" size={100} color="#bdbdbd" />
      <Text style={empty_list.text}>Henüz bir iş yok..</Text>
    </View>
  );
}
