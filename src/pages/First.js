import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

function First() {
  const myCounter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, backgroundColor: '#eceff1'}}>
      <Text style={{fontSize: 50}}>First</Text>
      <Text style={{fontSize: 50}}>Counter: {myCounter}</Text>

      <Button
        title="Update!"
        onPress={() => dispatch({type: 'UPDATE_COUNTER'})}
      />
    </View>
  );
}

export default First;
