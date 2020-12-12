/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {Input, Button} from './components';

function Main(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signIn() {
    alert(email + ' ' + password);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require('./asstes/cart.png')}
              resizeMode="contain"
            />
            <Input
              placeholder="E-posta adresiniz.."
              onType={(text) => setEmail(text)}
            />
            <Input
              placeholder="Parolanız.."
              onType={(text) => setPassword(text)}
            />

            <Button title="Giriş Yap" variant="sign_in" onClick={signIn} />
            <Button
              title="Kayıt Ol"
              variant="sign_up"
              onClick={() => console.log('asdasd')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3e5fc',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
    marginVertical: 20,
  },
});

export default Main;
