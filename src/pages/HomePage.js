import React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen(props) {
  function goTo() {
    props.navigation.navigate('Friends', {userId: 100, userName: 'Selamlar!!'});
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go to friends" onPress={goTo} />
    </View>
  );
}

export {HomeScreen};
