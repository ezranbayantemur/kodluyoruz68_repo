import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';

export function Sign({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('moon', 'Hesabınız oluşturuldu');
        navigation.navigate('Login');
      })
      .catch(({code, message}) => Alert.alert(code, message));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>🌔</Text>
      <TextInput
        style={styles.input}
        placeholder="Email.."
        autoCapitalize="none"
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password.."
        onChangeText={(value) => setPassword(value)}
      />
      <Button title="Kayıt Ol" onPress={signUp} />
      <Button title="Geri" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
