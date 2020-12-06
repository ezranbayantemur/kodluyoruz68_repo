/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, TextInput, StyleSheet} from 'react-native';

function Main() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Adınızı giriniz.."
            onChangeText={(value) => console.log(value)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Main;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});
