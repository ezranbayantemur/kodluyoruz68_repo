import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSize from '../../styles/font-size';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
  },
  logo: {
    height: Dimensions.get('window').height / 2,
  },
  title: {
    color: colors.white,
    fontSize: fontSize.huge,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: spacing.normal,
  },
});
