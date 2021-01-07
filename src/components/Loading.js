import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {loading} from '../styles/components_styles';

export function Loading() {
  return (
    <View style={loading.container}>
      <ActivityIndicator size="large" />
      <Text style={loading.text}>
        İş imkanları aranıyor, lütfen bekleyiniz..
      </Text>
    </View>
  );
}
