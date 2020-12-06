/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import MyButton from './component/MyButton';

function Main() {
  const isAdmin = true;

  function controlUser(value) {
    if (value < 50) return 'LOW';
    return 'HIGH';
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 50}}>Hello!</Text>

        <Text>{isAdmin ? 'ADMIN USER' : 'CUSTOMER'}</Text>
        <Text>{controlUser(25)}</Text>

        {isAdmin && <Text>UPDATE</Text>}
      </View>
    </SafeAreaView>
  );
}

export default Main;
