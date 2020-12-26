import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header({count}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO</Text>
      <Text style={styles.countTitle}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#b71c1c',
    fontSize: 40,
  },
  countTitle: {
    fontWeight: 'bold',
    fontSize: 27,
  },
});

export default Header;
