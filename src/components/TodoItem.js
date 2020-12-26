/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function TodoItem({item, onToggle, onRemove}) {
  return (
    <TouchableOpacity
      style={[styles.container, item.isDone && {backgroundColor: '#e5d1d1'}]}
      onPress={() => onToggle(item.id)}
      onLongPress={() => onRemove(item.id)}>
      <Text
        style={[
          styles.title,
          item.isDone && {textDecorationLine: 'line-through'},
        ]}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b71c1c',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TodoItem;
