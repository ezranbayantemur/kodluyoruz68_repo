/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';

import UserItem from './component/UserItem';

const myArray = [
  {
    uid: 1002,
    name:
      'Exercitation aliquip esse incididunt aliqua occaecat commodo incididunt.',
    age: 26,
    isAdmin: true,
  },
  {
    uid: 1003,
    name: 'Dolore id laboris aliquip mollit quis mollit elit.',
    age: 36,
    isAdmin: false,
  },
  {
    uid: 1004,
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
          keyExtractor={(item, index) => item.uid.toString()}
          data={myArray}
          renderItem={({item}) => {
            return (
              <UserItem user={item} />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Main;
