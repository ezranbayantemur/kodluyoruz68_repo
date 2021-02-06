import {Formik} from 'formik';
import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';
import styles from './style';

const initialValues = {
  content: '',
};

export function FeedInput({onSubmit}) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={handleChange('content')}
              onBlur={handleBlur('content')}
              style={styles.content}
              value={values.content}
              multiline
              maxLength={300}
            />
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name="send"
              size={25}
              color={colors.white}
              onPress={handleSubmit}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}
