/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

function Main(props) {
  const [number, setNumber] = useState(100);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('COMPONENT DID MOUNT');
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 50}}>Counter: {counter}</Text>
        <Text style={{fontSize: 50}}>Number: {number}</Text>

        <Button
          title="update counter"
          onPress={() => setCounter(counter + 1)}
        />

        <Button title="update number" onPress={() => setNumber(number + 10)} />
      </View>
    </SafeAreaView>
  );
}

export default Main;
