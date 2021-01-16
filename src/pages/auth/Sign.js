import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {useSign} from './hooks';

export function Sign({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {loading, error, response, sign} = useSign();

  function signUp() {
    sign(email, password);
  }

  if (response) {
    navigation.navigate('Login');
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (error) {
    Alert.alert('moon', error.message);
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
