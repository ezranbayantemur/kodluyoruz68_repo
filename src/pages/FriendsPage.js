import React from 'react';
import {View, Text, Button} from 'react-native';

function FriendScreen({navigation, route}) {
  console.log('Friends Screen Render');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Friends Screen</Text>
    </View>
  );
}

export {FriendScreen};
