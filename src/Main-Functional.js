import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

function Main(props) {
  function checkUser(name) {
    return <Text>USERNAME: {name}</Text>;
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Hello Functional</Text>
        {checkUser('EZRAN')}
      </View>
    </SafeAreaView>
  );
}

export default Main;
