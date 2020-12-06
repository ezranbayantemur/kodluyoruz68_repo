import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const MyButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={props.myPress}>
        <Text>{props.myTitle}</Text>
      </TouchableOpacity>
      {props.myHeader}
      {props.children}
      {props.children}

      <TouchableOpacity
        style={[styles.buttonContainer, {backgroundColor: 'red'}]}
        onPress={() => props.onSend(5)}>
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
  },
  buttonContainer: {
    backgroundColor: 'cyan',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
});
