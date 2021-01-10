/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';

export function Error() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        style={{flex: 1}}
        autoPlay
        loop={false}
        source={require('../assets/error.json')}
      />
    </SafeAreaView>
  );
}
