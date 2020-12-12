/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

function Main(props) {
  const [counter, setCounter] = useState(0);

  console.log('RENDER');
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 50}}>Counter: {counter}</Text>
        <Button title="up!" onPress={() => setCounter(5)} />
      </View>
    </SafeAreaView>
  );
}

export default Main;
