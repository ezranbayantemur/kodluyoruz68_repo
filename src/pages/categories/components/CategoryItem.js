import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {category_item} from './styles';

export function CategoryItem({item, onSelect}) {
  return (
    <TouchableOpacity style={category_item.container} onPress={onSelect}>
      <Image
        style={category_item.image}
        source={{uri: item.strCategoryThumb}}
      />
      <Text style={category_item.text}>{item.strCategory}</Text>
    </TouchableOpacity>
  );
}
