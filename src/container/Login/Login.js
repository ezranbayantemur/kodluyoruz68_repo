import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Formik} from 'formik';
import {Input, Button} from '../../components';
import styles from './styles';
import LottieView from 'lottie-react-native';
import LoginGIF from '../../assets/login.json';
import validationSchema from './validationSchema';

const initialFormValues = {
  email: '',
  password: '',
};

export function Login({loading, onSubmit, onRegister}) {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView source={LoginGIF} autoPlay style={styles.logo} />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialFormValues}
        onSubmit={onSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          return (
            <View style={styles.container}>
              <Text style={styles.title}>kod_one</Text>
              <Input
                placeholder="email adresin.."
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email}
                isTouched={touched.email}
              />
              <Input
                placeholder="şifren.."
                autoCapitalize="none"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password}
                isTouched={touched.password}
              />
              <Button
                loading={loading}
                onPress={handleSubmit}
                title="giriş yap"
              />
              <Button title="kayıt ol" onPress={onRegister} />
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
}
