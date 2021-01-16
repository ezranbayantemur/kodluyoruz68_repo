import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function TodoItem({item}) {
  return (
    <View style={styles.container}>
      <Text>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
  },
});
