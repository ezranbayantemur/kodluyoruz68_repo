/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';

const myArray = [
  {
    id: 0,
    name:
      'Exercitation aliquip esse incididunt aliqua occaecat commodo incididunt.',
    age: 26,
    isAdmin: true,
  },
  {
    id: 1,
    name: 'Dolore id laboris aliquip mollit quis mollit elit.',
    age: 36,
    isAdmin: false,
  },
  {
    id: 2,
    name: 'Sint occaecat proident eiusmod eu excepteur ipsum eu.',
    age: 15,
    isAdmin: true,
  },
]; // JSON Array, array of object

function Main() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          data={myArray}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

export default Main;
