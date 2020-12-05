/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import CityItem from './components/CityItem';

const cityList = [
  'Manisa',
  'Çanakkale',
  'Ankara',
  'Eskişehir',
  'Konya',
  'Antalya',
  'Bursa',
];

function renderCity() {
  return cityList.map((city) => {
    return <CityItem cityName={city} />;
  });
}

function Main() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>{renderCity()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbdefb',
    justifyContent: 'space-between',
  },
});

export default Main;
