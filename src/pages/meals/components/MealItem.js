import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {meal_item} from './styles';

export function MealItem({item, onSelect}) {
  return (
    <TouchableOpacity style={meal_item.container} onPress={onSelect}>
      <Image style={meal_item.image} source={{uri: item.strMealThumb}} />
      <Text style={meal_item.text}>{item.strMeal}</Text>
    </TouchableOpacity>
  );
}
