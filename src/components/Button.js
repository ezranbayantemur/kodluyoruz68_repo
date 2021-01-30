import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {button_style} from '../styles/component_styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Button({text, icon, onPress}) {
  return (
    <TouchableOpacity style={button_style.container} onPress={onPress}>
      <Text style={button_style.text}>{text}</Text>
      <Icon name={icon} size={25} color="white" />
    </TouchableOpacity>
  );
}
