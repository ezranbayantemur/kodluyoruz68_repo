import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

function Main() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => console.log(response))
      .catch((response) => console.log(response));
  }

  function signIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => console.log(response))
      .catch((code) => console.log(code));
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Email.."
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password.."
        onChangeText={(value) => setPassword(value)}
      />
      <Button title="Kayıt Ol" onPress={signUp} />
      <Button title="Giriş Yap" onPress={signIn} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 5,
  },
});

export default Main;
