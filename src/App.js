/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, KeyboardAvoidingView} from 'react-native';
import Header from './components/Header';
import InputPanel from './components/InputPanel';
import TodoItem from './components/TodoItem';

function App(props) {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const renderTodo = ({item}) => {
    return <TodoItem item={item} onToggle={toggleTodo} onRemove={removeTodo} />;
  };

  const toggleTodo = (id) => {
    const index = todoList.findIndex((x) => x.id === id);
    todoList[index].isDone = !todoList[index].isDone;

    setTodoList([...todoList]);
  };

  const removeTodo = (id) => {
    const index = todoList.findIndex((x) => x.id === id);
    todoList.splice(index, 1);

    setTodoList([...todoList]);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#eceff1'}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View style={{flex: 1}}>
          <FlatList
            testID="list"
            ListHeaderComponent={
              <Header count={todoList.filter((u) => !u.isDone).length} />
            }
            keyExtractor={(item) => item.id.toString()}
            data={todoList}
            renderItem={renderTodo}
          />
          <InputPanel onTodo={addTodo} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default App;
