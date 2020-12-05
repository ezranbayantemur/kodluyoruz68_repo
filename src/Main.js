/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

function Main() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'orange',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          flexDirection: 'column-reverse',
        }}>
        <Text style={{fontSize: 30}}>Erzincan</Text>
        <Text style={{fontSize: 30}}>İzmir</Text>
        <Text style={{fontSize: 30}}>İstanbul</Text>
      </View>
    </SafeAreaView>
  );
}

export default Main;
