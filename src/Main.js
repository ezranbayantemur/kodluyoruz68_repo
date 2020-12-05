import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import MyButton from './components/MyButton';

function Main() {
  return (
    <SafeAreaView>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Merhaba!</Text>
      </View>

      <MyButton title="Go!" theme="myBTN_1" />
      <MyButton title="Hello!" theme="myBTN_2" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#eceff1',
    margin: 10,
    padding: 20,
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 60,
  },
});

export default Main;
