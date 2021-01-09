import React from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import {user_list} from './styles';

export function UserInput() {
  return (
    <SafeAreaView style={user_list.container}>
      <Text style={user_list.title}>User Input</Text>

      <View style={user_list.inputContainer}>
        <TextInput placeholder="E-mail address.." />
      </View>

      <View style={user_list.inputContainer}>
        <TextInput placeholder="Name.." />
      </View>

      <View style={user_list.inputContainer}>
        <TextInput placeholder="Surname.." />
      </View>

      <View style={user_list.inputContainer}>
        <TextInput placeholder="Age.." />
      </View>
    </SafeAreaView>
  );
}
