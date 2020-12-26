import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

function InputPanel(props) {
  const [todoText, setTodoText] = useState('');

  const sendTodo = () => {
    if (!todoText) {
      return;
    }

    const todoItem = {
      id: Math.random(),
      text: todoText,
      isDone: false,
    };
    setTodoText('');
    props.onTodo(todoItem);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          testID="input"
          placeholder="Type something to do.."
          onChangeText={(val) => setTodoText(val)}
          value={todoText}
        />
      </View>
      <TouchableOpacity
        testID="button"
        style={styles.buttonContainer}
        onPress={sendTodo}>
        <Text style={styles.buttonTitle}>ADD TODO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bdbdbd',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  inputContainer: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 3,
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  buttonTitle: {
    fontWeight: 'bold',
  },
});

export default InputPanel;
