import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontsize from '../../styles/font-size';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.darkOrange,
    padding: spacing.normal,
    borderRadius: 5,
    margin: spacing.normal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontsize.normal,
  },
});
