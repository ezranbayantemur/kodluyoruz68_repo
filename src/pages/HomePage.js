import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function HomeScreen(props) {
  const [text, setText] = useState('');

  function goTo() {
    props.navigation.navigate('Friends', {userText: text});
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Home Screen</Text>

        <View style={styles.inputContainer}>
          <TextInput onChangeText={(val) => setText(val)} />
        </View>

        <Button title="Go to friends" onPress={goTo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});

export {HomeScreen};
