import React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to friends"
        onPress={() => props.navigation.navigate('Friends')}
      />
    </View>
  );
}

export {HomeScreen};
