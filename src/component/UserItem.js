import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function UserItem({user}) {
  return (
    <View style={styles.container}>
      <Text>{user.name}</Text>
      <Text>{user.age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
});

export default UserItem;
