import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    margin: spacing.normal,
  },
  formContainer: {
    backgroundColor: colors.white,
    padding: spacing.normal,
    borderRadius: 5,
  },
  errorText: {
    marginTop: spacing.tiny,
    color: colors.warning,
  },
});
