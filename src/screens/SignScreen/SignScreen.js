import React from 'react';
import {Sign} from '../../container';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import {Alert} from 'react-native';

export function SignScreen(props) {
  const navigation = useNavigation();
  const {loading, error, sign} = useAuth();

  async function handleSubmit(values) {
    await sign(values);
    navigation.navigate('Login');
  }

  if (error) {
    Alert.alert('kod_one', error.message);
  }

  return (
    <Sign
      loading={loading}
      onSubmit={handleSubmit}
      onLogin={() => navigation.navigate('Login')}
    />
  );
}
