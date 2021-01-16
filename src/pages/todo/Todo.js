import React, {useState, useEffect} from 'react';
import {Button, FlatList, SafeAreaView} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

const temp_data = [
  {id: 0, text: 'Test todo..'},
  {id: 1, text: 'Test todo..'},
  {id: 2, text: 'Test todo..'},
];

export function Todo() {
  const [todoArray, setTodoArray] = useState([]);

  useEffect(() => {
    database()
      .ref(`${auth().currentUser.uid}`)
      .on('value', (snapshot) => {
        const data = snapshot.val();

        if (!data) {
          return;
        }
        setTodoArray(Object.values(data));
      });
  }, []);

  const renderTodo = ({item}) => <TodoItem item={item} />;

  function addTodo(todo) {
    database()
      .ref(`${auth().currentUser.uid}`)
      .push({id: Math.random(), text: todo});
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={todoArray}
        renderItem={renderTodo}
      />

      <TodoInput onAdd={addTodo} />
      <Button title="Çıkış Yap" onPress={() => auth().signOut()} />
    </SafeAreaView>
  );
}
