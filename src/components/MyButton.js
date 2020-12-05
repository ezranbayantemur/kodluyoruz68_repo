import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function MyButton(props) {
  return (
    <TouchableOpacity style={styles[props.theme]}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  myBTN_1: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
  },
  myBTN_2: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
});

export default MyButton;
