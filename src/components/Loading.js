/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';

export function Loading() {
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
        source={require('../assets/loading.json')}
      />
    </SafeAreaView>
  );
}
