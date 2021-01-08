import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {youtube_button} from './styles';

export function YoutubeButton({onPress}) {
  return (
    <TouchableOpacity style={youtube_button.container} onPress={onPress}>
      <Icon name="youtube" color="white" size={30} />
      <Text style={youtube_button.text}>Youtube</Text>
    </TouchableOpacity>
  );
}
