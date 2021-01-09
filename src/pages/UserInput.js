import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {user_input} from './styles';
import {useDispatch} from 'react-redux';

export function UserInput() {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [surName, setSurname] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();

  function handleSubmit() {
    const user = {
      id: Math.random(),
      mail,
      name,
      surName,
      age,
    };

    console.log('DISPATCH DATA..');
    dispatch({type: 'ADD_USER', payload: {userData: user}});
  }

  return (
    <SafeAreaView style={user_input.container}>
      <Text style={user_input.title}>User Input</Text>

      <View style={user_input.inputContainer}>
        <TextInput
          placeholder="E-mail address.."
          onChangeText={(v) => setMail(v)}
        />
      </View>

      <View style={user_input.inputContainer}>
        <TextInput placeholder="Name.." onChangeText={(v) => setName(v)} />
      </View>

      <View style={user_input.inputContainer}>
        <TextInput
          placeholder="Surname.."
          onChangeText={(v) => setSurname(v)}
        />
      </View>

      <View style={user_input.inputContainer}>
        <TextInput placeholder="Age.." onChangeText={(v) => setAge(v)} />
      </View>

      <TouchableOpacity
        style={user_input.buttonContainer}
        onPress={handleSubmit}>
        <Text style={user_input.buttonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={user_input.buttonContainer}
        onPress={() => dispatch({type: 'ACTIVATE_USERS'})}>
        <Text style={user_input.buttonText}>Activate</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
