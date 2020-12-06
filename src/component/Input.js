import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

function Input(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={props.placeholder}
          onChangeText={(value) => props.onText(value)}
          keyboardType={props.type}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  container: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 5,
    borderRadius: 10,
    margin: 10,
  },
});

export default Input;
