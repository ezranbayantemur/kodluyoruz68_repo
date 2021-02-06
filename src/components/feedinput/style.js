import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    bottom: 35,
    position: 'absolute',
    backgroundColor: colors.orange,
    flexDirection: 'row',
    padding: spacing.xsmall,
    margin: spacing.normal,
    borderRadius: 5,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    color: colors.white,
    margin: spacing.small,
  },
  iconContainer: {
    justifyContent: 'flex-end',
  },
});
