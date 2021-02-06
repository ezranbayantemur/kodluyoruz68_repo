import {StyleSheet} from 'react-native';
import fontSize from '../../styles/font-size';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {},
  contentContainer: {
    backgroundColor: colors.white,
    paddingBottom: spacing.large,
    padding: spacing.xsmall,
  },
  headerContainer: {
    backgroundColor: colors.darkOrange,
    padding: spacing.small,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSize.normal,
  },
  time: {
    color: colors.white,
    fontStyle: 'italic',
    fontSize: fontSize.small,
  },
});
