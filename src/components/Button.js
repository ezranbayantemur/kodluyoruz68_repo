import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function Button(props) {
  return (
    <TouchableOpacity
      style={styles[`${props.variant}_container`]}
      onPress={props.onClick}>
      <Text style={styles[`${props.variant}_title`]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export {Button};

const styles = StyleSheet.create({
  sign_in_container: {
    backgroundColor: '#2196f3',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  sign_in_title: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  sign_up_container: {
    padding: 10,
    margin: 10,
  },
  sign_up_title: {
    color: '#2196f3',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
