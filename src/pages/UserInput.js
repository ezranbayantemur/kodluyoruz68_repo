import React from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {user_input} from './styles';

export function UserInput() {
  return (
    <SafeAreaView style={user_input.container}>
      <Text style={user_input.title}>User Input</Text>

      <View style={user_input.inputContainer}>
        <TextInput placeholder="E-mail address.." />
      </View>

      <View style={user_input.inputContainer}>
        <TextInput placeholder="Name.." />
      </View>

      <View style={user_input.inputContainer}>
        <TextInput placeholder="Surname.." />
      </View>

      <View style={user_input.inputContainer}>
        <TextInput placeholder="Age.." />
      </View>

      <TouchableOpacity style={user_input.buttonContainer}>
        <Text style={user_input.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
