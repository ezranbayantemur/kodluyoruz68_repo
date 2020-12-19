import React from 'react';
import {View, Text, Button} from 'react-native';

function FriendScreen({navigation, route}) {
  console.log(route.params);
  const {userName} = route.params;
  console.log(userName);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Friends Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export {FriendScreen};
