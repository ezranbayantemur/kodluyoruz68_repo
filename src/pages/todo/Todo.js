import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

const temp_data = [
  {id: 0, text: 'Test todo..'},
  {id: 1, text: 'Test todo..'},
  {id: 2, text: 'Test todo..'},
];

export function Todo() {
  const renderTodo = ({item}) => <TodoItem item={item} />;

  function addTodo(todo) {
    return;
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={temp_data}
        renderItem={renderTodo}
      />

      <TodoInput onAdd={addTodo} />
    </SafeAreaView>
  );
}
