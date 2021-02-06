import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './style';

export function Input({error, isTouched, ...otherProps}) {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput {...otherProps} />
      </View>
      {isTouched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
