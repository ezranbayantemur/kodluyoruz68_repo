import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function Input({placeholder, onType}) {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} onChangeText={onType} />
    </View>
  );
}

export {Input};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
