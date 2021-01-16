import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import TodoItem from './components/TodoItem';

const temp_data = [
  {id: 0, text: 'Test todo..'},
  {id: 1, text: 'Test todo..'},
  {id: 2, text: 'Test todo..'},
];

auth().signOut();

export function Todo() {
  const renderTodo = ({item}) => <TodoItem item={item} />;

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={temp_data}
        renderItem={renderTodo}
      />
    </SafeAreaView>
  );
}
