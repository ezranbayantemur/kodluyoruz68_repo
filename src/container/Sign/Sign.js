import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Formik} from 'formik';
import {Input, Button} from '../../components';
import styles from './styles';
import validationSchema from './validationSchema';

const initialFormValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export function Sign({loading, onSubmit, onLogin}) {
  return (
    <SafeAreaView style={styles.container}>
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
        }) => (
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
            <Input
              placeholder="şifren yeniden.."
              autoCapitalize="none"
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              error={errors.confirmPassword}
              isTouched={touched.confirmPassword}
            />
            <Button loading={loading} onPress={handleSubmit} title="kayıt ol" />
            <Button title="giriş yap" onPress={onLogin} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}
