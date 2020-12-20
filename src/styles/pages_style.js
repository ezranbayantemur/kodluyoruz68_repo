import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const detail_page = StyleSheet.create({
  container: {padding: 5},
  image: {
    height: deviceSize.height / 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export {detail_page};
