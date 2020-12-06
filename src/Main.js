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
          myTitle={'Ezran'}
          myNumber={5}
          myPress={() => alert('Selam Ezran')}
          onSend={(val) => alert('Value is: ' + val)}
          myHeader={<Text>TEXT</Text>}>
          <View
            style={{
              margin: 10,
              backgroundColor: 'blue',
              padding: 10,
            }}>
            <Text>Merhaba</Text>
          </View>
        </MyButton>
      </View>
    </SafeAreaView>
  );
}

export default Main;
