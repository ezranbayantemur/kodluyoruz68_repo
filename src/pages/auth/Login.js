import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';

export function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    navigation.navigate('Sign');
  }

  function signIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => navigation.navigate('Todo'))
      .catch((response) => Alert.alert(response.code, response.message));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>🌔</Text>
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
      <Button title="Giriş Yap" onPress={signIn} />
      <Button title="Kayıt Ol" onPress={signUp} />
    </SafeAreaView>
  );
}
