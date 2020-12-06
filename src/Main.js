/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import MyButton from './component/MyButton';

function Main() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 50}}>Hello!</Text>

        <MyButton
          myTitle="Ezran"
          myPress={() => alert('Selam Ezran')}
          onSend={(val) => alert('Value is: ' + val)}
        />
        <MyButton
          myTitle="Ayşe"
          myPress={() => alert('İzmir')}
          onSend={(val) => alert('Value is: ' + val)}
        />

        <MyButton
          myTitle="Ali"
          myPress={() => alert('Ankara!')}
          onSend={(val) => alert('Value is: ' + val)}
        />
      </View>
    </SafeAreaView>
  );
}

export default Main;
