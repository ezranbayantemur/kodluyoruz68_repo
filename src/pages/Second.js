import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

function Second() {
  const ourCounter = useSelector((state) => state.counter);
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 50}}>Second</Text>
      <Text style={{fontSize: 50}}>Counter: {ourCounter}</Text>
    </View>
  );
}

export default Second;
