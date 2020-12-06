/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, TextInput, Text, StyleSheet} from 'react-native';
import Input from './component/Input';

function Main() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Input
          label="Adınız"
          placeholder="Adınızı girin.."
          onText={(username) => console.log(username)}
        />

        <Input
          label="Soyadınız"
          placeholder="Soyadınızı girin.."
          onText={(userSurname) => console.log(userSurname)}
        />

        <Input
          label="E-posta adresiniz"
          placeholder="E-posta adresinizi girin.."
          onText={(userMail) => console.log(userMail)}
          type="email-address"
        />
      </View>
    </SafeAreaView>
  );
}

export default Main;
