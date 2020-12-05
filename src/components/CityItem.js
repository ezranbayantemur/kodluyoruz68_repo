import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

function CityItem(props) {
  console.log(props);
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.dot} />
      <Text style={styles.nameLabel}>{props.cityName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#64b5f6',
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameLabel: {
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: 'black',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 8,
  },
});

export default CityItem;
