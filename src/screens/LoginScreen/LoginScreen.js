import React from 'react';
import {Login} from '../../container';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import {Alert} from 'react-native';

export function LoginScreen() {
  const navigation = useNavigation();
  const {loading, error, login} = useAuth();

  async function handleSubmit(values) {
    await login(values);
    navigation.navigate('Feed');
  }

  function handleRegister() {
    navigation.navigate('Sign');
  }

  if (error) {
    Alert.alert('kod_one', error.message);
  }

  return (
    <Login
      loading={loading}
      onSubmit={handleSubmit}
      onRegister={handleRegister}
    />
  );
}
